import {Request , Response , NextFunction} from 'express'
import { UserModel } from './user.model'
import * as userService from "./user.service"


/**
 * 添加用户数据的控制器
 * @param req 
 * @param res 
 * @param next 
 */
export const store = async (
    req : Request,
    res : Response,
    next : NextFunction
) => {
    // 准备数据
    const { name , password} = req.body;
    

    // 创建用户
    try {
        const data = await userService.createUser({name,password});
        res.status(201).send(data);
    } catch (error) {
        next(error)
    }
}