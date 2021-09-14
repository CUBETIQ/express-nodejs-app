import { Request, Response } from "express"
import Controller from "../decorators/controller.decorator"
import { Post, Get } from "../decorators/handlers.decorator"

const persons: Array<any> = [
    {
        id: 1,
        name: "Sambo",
    },
]

@Controller("/person")
export default class PersonController {
    @Get()
    public getPersons(req: Request, res: Response) {
        res.json(persons)
    }

    @Post()
    public createPerson(req: Request, res: Response) {
        const person = req.body

        if (person == null) {
            return res.status(400).json({
                status: 400,
                message: "Person is required",
            })
        }

        persons.push(person)
        res.json({
            message: "Person created successfully",
            body: person,
        })
    }
}
