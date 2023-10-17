import { PRIVATE_KEY} from "../app/app.config";
import jwt from "jsonwebtoken"
import { PossessOpations, SignTokenOptions } from "./auth.interface";
import { connection } from "../app/database/mysql";

/**
 * 签发令牌
 */
export const signToken = (options:SignTokenOptions ) => {
    // 准备选项
    const {payload} = options;

    // 签发 token
    /**
     * sign 的参数
     * @param payload 令牌的 payload
     * @param PRIVATE_KEY 令牌生成的秘钥
     * @param {algorithm : 'RS256'} 令牌的加密算法
     */
    const token = jwt.sign(payload , PRIVATE_KEY , {algorithm : 'RS256'})

    // 返回 token
    return token;
}


/**
 * 验证用户是否拥有内容
*/
export const possess = async (opations:PossessOpations) => {
    // 准备数据
    const {
        resourceType,
        resourceId,
        userId
    } = opations;
    // 准备请求
    const statement = `
        SELECT COUNT(${resourceType}.id) as count
        FROM ${resourceType}
        WHERE ${resourceType}.id = ?
            AND ${resourceType}.userId = ?
    `
    // 请求
    const [data] = await connection.promise().query(statement , [resourceId , userId]);
    console.log(data , userId);
    
    // 根据响应返回结果
    return data[0].count ? true : false;
} 