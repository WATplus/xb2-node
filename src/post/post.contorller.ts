import {Request , Response , NextFunction} from "express"
import { getPost } from "./post.service";

/**
 * 内容列表
*/
export const index = (
    request:Request,
    response:Response,
    nextFunction:NextFunction
)=>{
    const data = getPost()
    response.send(data)
};