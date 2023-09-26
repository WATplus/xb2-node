import { connection } from "../app/database/mysql";

/**
 * 获取内容列表
*/
export const getPost = async ()=>{
    const statement = `
        SELECT
            psot.id,
            post.title,
            post.content,
            JSON_OBJECT(
                user.id,
                user.name
            ) as user
        FROM POST
        LEFT JOIN user 
            on post.userId = user.id
    `;

    const [data] = await connection.promise().query(statement)

    return data;
}