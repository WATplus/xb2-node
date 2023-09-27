import app from "./app" // 这里不用/index.ts node 会自动指向 index.ts
import { APP_PORT} from "./app/app.config";
import { connection } from "./app/database/mysql";

/**
 * 开启服务
*/
app.listen(APP_PORT , ()=>{
    console.log(`^_^ 服务已开启 , 端口: ${APP_PORT}`);
    
})

/** 
 * 测试数据仓库的连接
 */
connection.connect(error => {
    if (error) {
        console.log("T_T 数据库服务连接失败" , error.message);
        return;
    }
    console.log("@^_^@ 数据库服务链接成功");
})


