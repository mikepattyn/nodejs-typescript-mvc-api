nodejs-typescript-mvc-api
A typescript starter template with dependency injection and controllers for nodejs.

## A controller example
```typescript
@controller('/status')
export class StatusController extends BaseHttpController implements interfaces.Controller {
    constructor(@inject(Logger) private logger: Logger) { 
        super() 
    }

    @httpGet('/')
    private health(req: Request, resp: Response) {
        this.logger.log(`Received a ${req.method} request on: ${keyof({StatusController})}`)
        return new OkResult()
    }
}
```
