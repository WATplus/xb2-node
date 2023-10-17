import {Request , Response , NextFunction} from 'express'
import * as userService from '../user/user.service'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import { PUBLIC_KEY } from '../app/app.config'
import { AccessControlOpations, TokenPayLoad } from './auth.interface'
import * as authService from "./auth.service"

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

/**
 * 验证用户
 */
export const author = (
    req : Request,
    res : Response,
    next : NextFunction
) => {
    try{
        // 准备数据
        const authorization = req.header("Authorization");
        if (!authorization) throw new Error("UNAUTHORIZATION");
        
        // 读取 token
        const token = authorization.replace("Bearer ","");
        if (!token) throw new Error("UNTOKEN");

        // 验证token
        const decoded = jwt.verify(token , PUBLIC_KEY , {algorithms:['RS256']});
        // 如果验证不过会报错 incalid signature 
        req.user = decoded as TokenPayLoad;

        next();
    }catch(error){
        next(new Error(error.message))
    }
}

/**
 * 访问验证
 */
export const accessControl = (opations : AccessControlOpations) => {
    return async (request:Request , response:Response , next:NextFunction)=>{
        const {possession} = opations;
        // 获取 userId
        const {id : userId} = request.user;
        // 放行管理员账户
        if (userId == 1) return next();
        // 准备资源
        const resourceTypeParam = Object.keys(request.params)[0];
        const resourceType = resourceTypeParam.replace("Id" , "");
        const resourceId = parseInt(request.params[resourceTypeParam] , 10);
        // 验证
        if (possession){
            try {
                const ownResource = await authService.possess({
                    resourceType,
                    resourceId,
                    userId
                })
                
                // 如果不拥有
                if (! ownResource) return next(new Error("USER_DOES_NOT_OWN_RESOURCE"))
            } catch (error) {
                next(error)
            }

        }
        // 下一步
        next()
    }
}