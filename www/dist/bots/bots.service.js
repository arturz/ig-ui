"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const createBot_1 = __importDefault(require("./utils/createBot"));
const getId_1 = __importDefault(require("./utils/getId"));
const config_service_1 = require("../config/config.service");
const ms_1 = __importDefault(require("ms"));
const logs_service_1 = require("../logs/logs.service");
const createDataDir_1 = __importDefault(require("../accounts/utils/createDataDir"));
const accounts_service_1 = require("../accounts/accounts.service");
let BotsService = class BotsService {
    constructor(configService, logsService, accountsService) {
        this.configService = configService;
        this.logsService = logsService;
        this.accountsService = accountsService;
        this.botInstances = new Map();
    }
    async createBot({ accountId, device, web = false }) {
        if (!device)
            device = (await this.accountsService.getAccount(accountId)).device;
        const id = await getId_1.default();
        const cleanup = () => this.botInstances.delete(id);
        const bot = await createBot_1.default({
            device,
            dataDir: await createDataDir_1.default(accountId),
            env: Object.assign({ LOGIN: this.configService.get('LOGIN'), PASSWORD: this.configService.get('PASSWORD'), NODE_ENV: this.configService.get('NODE_ENV') }, this.configService.get('HEADLESS') && { HEADLESS: this.configService.get('HEADLESS') }),
            beforeLoad: (slave) => {
                slave.on('log', this.logsService.handleLog(accountId));
                slave.onRequest('isFollowed', this.logsService.handleRequestIsFollowed(accountId));
                slave.onRequest('oldestFollowed', this.logsService.handleRequestOldestFollowed(accountId));
                slave.fork.once('exit', cleanup);
                slave.fork.once('error', cleanup);
            }
        });
        this.botInstances.set(id, {
            bot,
            accountId,
            createdAt: new Date
        });
        console.log(`Created ${id} bot`);
        if (web)
            setTimeout(() => {
                try {
                    bot.slave.kill();
                }
                catch (error) { }
            }, 1000 * 60 * 15);
        return id;
    }
    exit(id) {
        if (this.botInstances.has(id)) {
            this.botInstances.get(id).bot.exit();
            this.botInstances.delete(id);
            console.log(`Exitted ${id} bot`);
        }
    }
    get(id) {
        if (this.botInstances.has(id))
            return this.botInstances.get(id).bot;
        return null;
    }
    getList() {
        return [...this.botInstances.entries()].map(([id, botInstance]) => ({
            id,
            created: ms_1.default(Date.now() - botInstance.createdAt.getTime()),
            accountId: botInstance.accountId
        }));
    }
};
BotsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_service_1.ConfigService,
        logs_service_1.LogsService,
        accounts_service_1.AccountsService])
], BotsService);
exports.BotsService = BotsService;
//# sourceMappingURL=bots.service.js.map