import { error } from "console";
import {Request , Response , NextFunction} from "express"

/**
 * 输出请求地址的中间件
*/

export const requestUrl = (
    request:Request,
    response:Response,
    next:NextFunction
)=>{
    console.log(request.url);
    next()// 执行后续的中间件和控制器
};

/**
 * 异常处理器
*/

export const defaultErrorHendler = (
    error:any,
    request:Request,
    response:Response,
    next:NextFunction
) => {
    if (error){
        console.log("!_! 出现异常 , 错误信息: " , error.message);
        
    }
    let statuCode:number , message:string;
    // 判断错误信息
    switch (error.message) {
        case "NAME_IS_REQUIRED":
            statuCode=  400; // bad request
            message = "缺少用户名"
            break;
        case "PASSWORD_IS_REQUIRED":
            statuCode=  400; // bad request
            message = "缺少用户密码"
            break;
        case "USERNAME_ALREDY_EXIST":
            statuCode=  409 // 冲突
            message = "用户名已存在"
            break;
        case "USERNAME_DOES_NOT_EXIST":
            statuCode=  400 // bad request
            message = "用户不存在"
            break;
        case "PASSWORD_DOES_MATCHED":
            statuCode=  400 // bad request
            message = "密码错误"
            break;
        case "invalid signature":
            statuCode=  401 // bad request
            message = "令牌无效"
            break;
        case "UNAUTHORIZATION":
        case "UNTOKEN":
            statuCode=  401 // 未授权
            message = " Authorization 缺失或无效"
            break;
        default:
            statuCode = 500;
            message = "默认错误处理"
            break;
    }

    response.status(statuCode).send({message})
};