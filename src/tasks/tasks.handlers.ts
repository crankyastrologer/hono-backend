import {ListRoute} from "@/tasks/tasks.routes";
import{ AppRouteHandler} from "@/lib/types";
import db from "@/db";


const list: AppRouteHandler<ListRoute> = async (c)=>{
    const tasks = await db.query.tasks.findMany()
    return c.json(tasks)
}
export {list}
