import dotenv from "dotenv"

dotenv.config(); // 默认读取主目录下的.env

/**
 * 应用配置
 */
export const {APP_PORT} = process.env;

/**
 * 数据库相关配置
*/

export const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
    
} = process.env;

/**
 * 将公秘钥结构并解码
*/
let {PRIVATE_KEY,PUBLIC_KEY} = process.env;
// 解码
PRIVATE_KEY = Buffer.from(PRIVATE_KEY , "base64").toString()
PUBLIC_KEY = Buffer.from(PUBLIC_KEY , "base64").toString()
export {PRIVATE_KEY , PUBLIC_KEY}