import { Request, Response } from "express"
import Controller from "../decorators/controller.decorator"
import { Get } from "../decorators/handlers.decorator"

@Controller("/hello")
export default class IndexController {
    constructor() {}

    @Get("")
    public index(req: Request, res: Response) {
        res.send(`Hello Index`)
    }
}
