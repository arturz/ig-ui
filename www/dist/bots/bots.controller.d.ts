import { BotsService } from './bots.service';
export declare class BotsController {
    private readonly botsService;
    constructor(botsService: BotsService);
    exit(id: string): void;
    executeSupervisor(id: string, name: string, payload: string): Promise<{
        result: any;
    }>;
    getSupervisors(id: string): Promise<any>;
}
