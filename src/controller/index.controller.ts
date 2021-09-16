import { Request, Response } from "express"
import { Controller, Get } from "@cubetiq/express-server/dist/decorators"

@Controller("/hello")
export default class IndexController {
    constructor() {}

    @Get("")
    public index(req: Request, res: Response) {
        res.send(`Hello Index`)
    }

    @Get("/:name")
    public hello(req: Request, res: Response) {
        res.send(`Hello ${req.params.name}`)
    }
}
