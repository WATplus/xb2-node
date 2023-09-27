import {Request , Response , NextFunction} from 'express'

// import * as authService from "./auth.service"

export const login = async (
    req : Request,
    res : Response,
    next : NextFunction
) => {
    // 准备数据
    const {name , password} = req.body;

    // 返回登录结果
    res.send({"message":`👏🏻 欢迎回来 ${name}`})
}