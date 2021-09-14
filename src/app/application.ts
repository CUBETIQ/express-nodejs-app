import express, { Application as ExpressApp } from "express"

class Application {
    private readonly _instance: ExpressApp

    get instance(): ExpressApp {
        return this._instance
    }

    constructor() {
        this._instance = express()
        this._instance.use(express.json())
        this.registerRoutes()
    }

    private registerRoutes(): void {
        this._instance.get("/", (req, res) => {
            res.send("Hello World!")
        })
    }
}

export default new Application()
