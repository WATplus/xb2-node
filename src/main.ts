import app from "./app" // 这里不用/index.ts node 会自动指向 index.ts
import { APP_PORT } from "./app/app.config";

/**
 * 开启服务
*/
app.listen(APP_PORT , ()=>{
    console.log(`^_^ 服务已开启 , 端口: ${APP_PORT}`);
    
})