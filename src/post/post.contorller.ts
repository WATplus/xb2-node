import {Request , Response , NextFunction} from "express"
import { getPost } from "./post.service";

/**
 * 内容列表
*/
export const index = async (
    request:Request,
    response:Response,
    next:NextFunction
)=>{
    try{
        const data = await getPost()
        response.send(data)
    }catch(error){
        next(error)
    }
};