import dotenv from "dotenv"

dotenv.config(); // 默认读取主目录下的.env

/**
 * 应用配置
 */
export const {APP_PORT} = process.env;