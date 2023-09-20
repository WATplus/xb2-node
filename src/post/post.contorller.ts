import {Request , Response , NextFunction} from "express"
import { getPost } from "./post.service";

/**
 * 内容列表
*/
export const index = (
    request:Request,
    response:Response,
    next:NextFunction
)=>{
    /**
     * 异常测试
     */
    
    if (request.headers["error_test"] !== "error_terst"){
        // return 是为了不继续执行控制器的后续代码
        return next(new Error()); // next()将错误传递给异常处理
    }

    const data = getPost()
    response.send(data)
};