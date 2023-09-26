import { connection } from "../app/database/mysql";
import { PostModel } from "./post.model";

/**
 * 获取内容列表
*/
export const getPost = async ()=>{
    const statement = `
        SELECT
            post.id,
            post.title,
            post.content,
            JSON_OBJECT(
                "id",user.id,
                "name",user.name
            ) as user
        FROM POST
        LEFT JOIN user  
            on post.userId = user.id
    `;
    
    const [data] = await connection.promise().query(statement)

    return data;
}

/** 
 * 存放数据
 * @return 返回存放数据后的新数据表
*/

export const creatPost = async (post : PostModel) => {
    // 准备查询
    const statement = `
        INSERT INTO post
        SET ?
    `

    // 执行查询
    const [data] = await connection.promise().query(statement , post);

    // 提供数据
    return data;
}

/** 
 * 更新数据
*/

export const updatePost = async (postId:number , post:PostModel) => {
    // 准备查询
    const statement = `
        UPDATE post
        SET ?
        WHERE id=?
    `

    // 执行查询
    const data = await connection.promise().query(statement , [post , postId]);

    return data;
}


/**
 * 删除接口
*/

export const deletePost = async (postId:number) => {
    const statement = `
        DELETE FROM post
        WHERE id=?
    `

    const [data] = await connection.promise().query(statement,postId);

    return data

}