import express,{Express} from "express"

export abstract class BaseServer {
    protected app: Express = express()
    abstract setupApp(): void
    abstract start(port: number): void

    getApp(): Express {
        return this.app
    }
}