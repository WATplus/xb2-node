import {Request , Response , NextFunction} from "express"

/**
 * 内容列表
*/
export const index = (
    request:Request,
    response:Response,
    nextFunction:NextFunction
)=>{
    response.send("内容列表")
};