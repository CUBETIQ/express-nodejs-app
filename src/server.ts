import Application from "@cubetiq/express-server/dist"
import { controllers as AllControllers } from "./controller"
class Server extends Application {
    get controllers(): any[] {
        return AllControllers
    }
}

export default new Server()
