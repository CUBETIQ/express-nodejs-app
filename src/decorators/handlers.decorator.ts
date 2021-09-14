import { MetadataKeys } from "../constants/metadata.keys"

export enum Method {
    GET = "get",
    POST = "post",
}

export interface RouteHandler {
    method: Method
    path: string
    handlerName: string | symbol
}

const methodDecoratorFactory = (method: Method) => {
    return (path: string): MethodDecorator => {
        return (target: any, propertyKey: string | symbol): void => {
            const controllerClass = target.constructor
            const routers: RouteHandler[] = Reflect.hasMetadata(
                MetadataKeys.ROUTERS,
                controllerClass
            )
                ? Reflect.getMetadata(MetadataKeys.ROUTERS, controllerClass)
                : []

            routers.push({
                method,
                path,
                handlerName: propertyKey,
            })

            Reflect.defineMetadata(
                MetadataKeys.ROUTERS,
                routers,
                controllerClass
            )
        }
    }
}

export const Get = methodDecoratorFactory(Method.GET)
export const Post = methodDecoratorFactory(Method.POST)
