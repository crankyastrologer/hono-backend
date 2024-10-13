import {OpenAPIHono} from "@hono/zod-openapi";
import {notFound, onError, serveEmojiFavicon} from "stoker/middlewares";
import {pinoLogger} from "@/middlewares/pino-logger";
import {AppBindings} from "@/lib/types";

export  function createRouter(){
    return  new OpenAPIHono<AppBindings>({
        strict: false,
    });
}
export  default function createApp() {
    const app = createRouter()
    app.use(pinoLogger())
    app.use(serveEmojiFavicon('😋'))
    app.notFound(notFound)
    app.onError(onError)
    return app
}
