import { Response } from 'nestjs-sse';
import { Request } from 'express';
import { StreamingService } from './streaming.service';
export declare class StreamingController {
    private readonly streamingService;
    constructor(streamingService: StreamingService);
    streaming(id: string, res: Response, req: Request): void;
}