import * as express from "express"
import { BaseMiddleware } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { Logger } from "../logger";

@injectable()
export class LoggerMiddleware extends BaseMiddleware {
    constructor(@inject(Logger) private _logger: Logger) {
        super()
    }
    public handler(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        this._logger.log(`${req}`);
        next();
    }
}