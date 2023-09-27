import express from "express";
import postRouter from "../post/post.router";
import userRouter from '../user/user.router'
import { defaultErrorHendler } from "./app.middleware";
import authRouter from '../auth/auth.router'

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
app.use(postRouter,userRouter,authRouter)// 注意是 use , 因为接口被创建的时候就已经定义好类型了
/**
 * 错误处理器
*/
app.use(defaultErrorHendler); 
/**
 * 导出 app
*/
export default app;
