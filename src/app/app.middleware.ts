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