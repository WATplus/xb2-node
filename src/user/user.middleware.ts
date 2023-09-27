import {Request , Response , NextFunction} from 'express'
import * as userService from "./user.service"
import bcrypt from 'bcrypt'


/**
 * 验证用户的完整性
 * @param req 
 * @param res 
 * @param next 
 */
export const validateUserData = async (
    req : Request,
    res : Response,
    next : NextFunction
) => {
    console.log("👮🏻 验证用户数据完整性");
    
    const {name , password} = req.body;

    // 验证数据完整性
    if (!name) return next(new Error("NAME_IS_REQUIRED"));
    if (!password) return next(new Error("PASSWORD_IS_REQUIRED"));

    // 验证是否已存在
    const user = await userService.getUserByName(name);
    // 如果已经存在
    if (user) return next(new Error("USERNAME_ALREDY_EXIST"))


    // 没问题交给控制器创建
    next()
}


/**
 * hash 化密码
 * @param req 
 * @param res 
 * @param next 
 */
export const hashPassword = async (
    req : Request,
    res : Response,
    next : NextFunction
) => {
    // 获取密码
    const {password} = req.body;
    // 替换为 hash 后的密码
    req.body.password = await bcrypt.hash(password , 10);
    // 继续执行控制器
    next()
}