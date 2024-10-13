import {OpenAPIHono} from "@hono/zod-openapi";
import {AppBindings} from "@/lib/types";
import createApp from "@/lib/create-app";
import configureOpenAPI from "@/lib/configure-open-api";


const app = createApp()

configureOpenAPI(app)

export default  app