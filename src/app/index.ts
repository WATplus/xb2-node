import express from "express";
import router from "../post/post.router";

/**
 * 创建应用
 */
const app = express()

/**
 * 处理 JSON
*/
app.use(express.json())

/**
 * 接口
*/
app.use(router)// 注意是 use , 因为接口被创建的时候就已经定义好类型了

/**
 * 导出 app
*/
export default app;
