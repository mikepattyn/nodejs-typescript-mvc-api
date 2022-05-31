import { injectable } from "inversify";

@injectable()
export class Logger {
    private logName = 'SimpleNodeTSRestAPI.Debug'

    async log(data: string) {
        console.log({tag: this.logName, data: data});
    }
}