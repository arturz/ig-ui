"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.default = (accountId) => path_1.default.resolve(__dirname, `../../../../accounts_data/${accountId}`);
//# sourceMappingURL=getDataDir.js.map