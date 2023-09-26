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
        default:
            statuCode = 500;
            message = "默认错误处理"
            break;
    }

    response.status(statuCode).send({message})
};