import {createRoute, z} from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import {jsonContent, jsonContentRequired} from "stoker/openapi/helpers";
import {insertTasksSchema, selectTasksSchema} from "@/db/schema";


const tags = ['Tasks']
const list = createRoute({
    path: '/tasks',
    method: 'get',
    tags: tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(z.array(selectTasksSchema)
        ,"List of tasks")
    }
})
const create = createRoute({
    path: '/tasks',
    method: 'get',
    request: {
        body: jsonContentRequired(insertTasksSchema),
    },
    tags: tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(selectTasksSchema
        ,"Created task")
    }
})
export type ListRoute = typeof list
export {list}