import {Request , Response , NextFunction} from 'express'
import { signToken } from './auth.service';

// import * as authService from "./auth.service"

export const login = async (
    req : Request,
    res : Response,
    next : NextFunction
) => {
    // 准备数据
    // const {name , password} = req.body;
    const {user : {
        id,
        name
    }} = req.body;

    try{
        // 签发令牌
        const token = signToken({payload:{id , name}});
        // 返回令牌
        res.send({id , name ,token})
    }catch(error){
        next(error)
    }

}