import {Request , Response , NextFunction} from "express"
import { creatPost, deletePost, getPost, updatePost } from "./post.service";
import _ from 'lodash'

/**
 * 读取内容列表
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


/** 
 * 存储数据
 */

export const store = async (
    request:Request,
    response:Response,
    next:NextFunction
) => {
    // 根据请求主体获取要插入的数据
    const {title , content} = request.body;

    // 创建内容
    try{
        const data = await creatPost({title , content});
        response.status(201).send(data)
    }catch(error){
        next(error)
    }
}


/**
 * 更新数据
 */

export const update = async (
    request:Request,
    response:Response,
    next:NextFunction
) => {
    // 从地质参数获取 postId
    const {postId} = request.params;
    

    // 准备数据
    // const {title , content} = request.body;
    const post = _.pick(request.body,['title','content'])

    // 更新
    try{
        const [data] = await updatePost(parseInt(postId,10) , post);
        response.send({data})
    }catch(error){
        next(error)
    }
}


/**
 * 删除控制器
*/
export const destroy = async (
    request:Request,
    response:Response,
    next:NextFunction
)=>{
    const {postId} = request.params;
    try{
        const data = await deletePost(postId)
        response.send(data)
    }catch(error){
        next(error)
    }
}

