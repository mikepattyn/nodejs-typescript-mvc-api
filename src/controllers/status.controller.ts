import { Request, Response } from "express"
import { inject } from "inversify"
import { all, BaseHttpController, controller, httpGet, interfaces } from "inversify-express-utils"
import { OkResult } from "inversify-express-utils/lib/results"
import { keyof } from "ts-keyof"
import { Logger } from "../logger"

@controller('/status')
export class StatusController extends BaseHttpController implements interfaces.Controller {
    constructor(@inject(Logger) private logger: Logger) { 
        super() 
    }
    @httpGet('/')
    private health(req: Request, resp: Response) {
        return new OkResult()
    }
}