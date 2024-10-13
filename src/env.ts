import {z} from 'zod';
import {config} from "dotenv";
import {expand} from "dotenv-expand";

expand(config());

const EnvSchema = z.object({
    NODE_ENV: z.string().default('development'),
    PORT: z.coerce.number().default(3000),
    LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace", "silent"]),
});
export type env = z.infer<typeof EnvSchema>
let env:env
try {
 env = EnvSchema.parse(process.env);
}
catch (e){
    const error = e as z.ZodError;
    console.error("❌ invalid env");
    console.error(error.flatten().fieldErrors);
    process.exit(1);
}


export default env