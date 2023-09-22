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