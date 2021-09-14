# Express Nodejs App

-   Nodejs
-   Express
-   TypeScript
-   Prettier
-   ESLint
-   Docker
-   DroneCI
-   Lerna Support
-   Support decorators

# Quickstart

-   Start

```shell
yarn start
```

-   Navigate

```shell
curl http://localhost:3000/info
```

-   Response

```json
{
    "startedAt": "2021-09-13T13:21:04.184Z",
    "message": "Instance id: presenter#143470",
    "status": "OK"
}
```

# Quick Register Controller

-   Add new controller `src/controller/home.controller.ts`

```typescript
import { Request, Response } from "express"
import Controller from "../decorators/controller.decorator"
import { Get, Post, Delete } from "../decorators/handlers.decorator"

const data: any[] = []

@Controller("/home")
export default class HomeController {
    constructor() {}

    @Get()
    public get(req: Request, res: Response) {
        res.json(data)
    }

    @Post()
    public create(req: Request, res: Response) {
        const body = req.body
        if (body == null) {
            return res.status(400).json({
                status: 400,
                message: "Data is required",
            })
        }

        data.push(body)
        res.json({
            message: "Data created successfully",
            body: body,
        })
    }

    @Delete("/:id")
    public get(req: Request, res: Response) {
        const id = req.params.id
        res.json({
            id: id,
        })
    }
}
```

-   Register controller into index.ts `(src/controllers/index.ts)`

```ts
import IndexController from "./index.controller"
import PersonController from "./person.controller"
import HomeController from "./home.controller"

export const controllers = [IndexController, PersonController, HomeController]
```

### Contributors

-   Sambo Chea <sombochea@cubetiqs.com>
