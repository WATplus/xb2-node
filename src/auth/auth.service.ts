import { PRIVATE_KEY} from "../app/app.config";
import jwt from "jsonwebtoken"

/**
 * 签发令牌
 */

// 定义配置参数
interface SignTokenOptions {
    payload? : any;
}

export const signToken = (options:SignTokenOptions) => {
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