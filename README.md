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

-   Clone repository

```shell
git clone https://git.cubetiqs.com/CUBETIQ/express-nodejs-app.git --recurse-submodules --remote-submodules
```

-   Update an existed repository

```shell
git submodule update --init --remote
```

-   Add Packages

```shell
mkdir packages && git submodule add https://git.cubetiqs.com/CUBETIQ/ts-common.git packages/ts-common && git submodule add https://git.cubetiqs.com/CUBETIQ/cubetiq-express-server.git packages/cubetiq-express-server
```

-   Install and Build Packages

```shell
yarn && npx lerna run build
```

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

# Build application

```shell
yarn build
```

# Quick Register Controller

-   Add new controller `src/controller/home.controller.ts`

```typescript
import { Request, Response } from "express"
import { Controller, Get, Post, Delete } from "../decorators"

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

-   Output registered routes

```ts
┌─────────┬──────────────────────┬─────────────────────────────────┐
│ (index) │         api          │             handler             │
├─────────┼──────────────────────┼─────────────────────────────────┤
│    0    │     'GET /hello'     │     'IndexController.index'     │
│    1    │  'GET /hello/:name'  │     'IndexController.hello'     │
│    2    │    'GET /person'     │  'PersonController.getPersons'  │
│    3    │    'POST /person'    │ 'PersonController.createPerson' │
│    4    │ 'DELETE /person/:id' │ 'PersonController.deletePerson' │
└─────────┴──────────────────────┴─────────────────────────────────┘
```

### Contributors

-   Sambo Chea <sombochea@cubetiqs.com> [4099C19544D3FF79]
