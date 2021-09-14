import { createServer } from "http"
import { SERVER_PORT } from "./app.config"
import { info } from "@cubetiq/ts-common/dist/log"
import application from "./application"

// get current host id
const hostId = `${require("os").hostname()}#${process.pid}`
const startedAt = new Date()

const app = application.instance
const httpServer = createServer(app)

info(
    `Application server running on: ${hostId} at port: ${SERVER_PORT} and started at: ${startedAt}`
)
httpServer.listen(SERVER_PORT)

app.get("/info", (req, res) => {
    res.type("json")
    res.send({
        startedAt,
        message: `Instance id: ${hostId}`,
        status: "OK",
    })
})
