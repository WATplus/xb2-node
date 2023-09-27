import {Request , Response , NextFunction} from 'express'
import * as userService from '../user/user.service'
import bcrypt from 'bcrypt'

/**
 * 验证用户的完整性
 * @param req 
 * @param res 
 * @param next 
 */
export const validateLoginData = async (
    req : Request,
    res : Response,
    next : NextFunction
) => {
    console.log("👮🏻 验证登录数据完整性");
    
    const {name , password} = req.body;

    // 验证数据完整性
    if (!name) return next(new Error("NAME_IS_REQUIRED"));
    if (!password) return next(new Error("PASSWORD_IS_REQUIRED"));

    // 验证是否已存在
    const user = await userService.getUserByName(name , {password:true});
    // 如果不存在
    if (!user) return next(new Error("USERNAME_DOES_NOT_EXIST"))

    // 验证密码
    const matched = await bcrypt.compare(password , user.password)
    if (!matched) return next(new Error("PASSWORD_DOES_MATCHED"))

    // 向请求主体添加用户信息
    req.body.user = user;

    // 没问题交给控制器创建
    next() 
}