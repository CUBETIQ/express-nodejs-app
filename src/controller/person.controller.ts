import { Request, Response } from "express"
import {
    Controller,
    Delete,
    Get,
    Post,
} from "@cubetiq/express-server/dist/decorators"

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

    @Delete("/:id")
    public deletePerson(req: Request, res: Response) {
        const id = req.params.id

        if (id == null) {
            return res.status(400).json({
                status: 400,
                message: "Id is required",
            })
        }

        const person = persons.find((person) => person.id === Number(id))

        if (person == null) {
            return res.status(404).json({
                status: 404,
                message: "Person not found",
            })
        }

        persons.splice(persons.indexOf(person), 1)
        res.json({
            message: "Person deleted successfully",
            body: person,
        })
    }
}
