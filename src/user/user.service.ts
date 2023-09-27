import { connection } from '../app/database/mysql'
import { UserModel } from './user.model'

/**
 * 插入一个新用户
 * @param user 插入的用户具体字段
 * @returns 
 */
export const createUser = async (user: UserModel) => {
    // 准备查询
    const statement = `
        INSERT INTO user
        SET ?
    `

    // 创建数据并获得结果
    const data = await connection.promise().query(statement,user)

    // 返回数据
    return data;
}

/**
 * 根据用户名查询数据库中的数据
 * @param name 要查询的用户名
 * @returns 
 */
interface GetUserOptions {
    password? : boolean;
}

export const getUserByName = async (
    name : string ,
    options:GetUserOptions = {}// 默认为空
) => {
    // 准备选项
    const {password} = options;
    // 准备查询
    const statement = `
    SELECT 
        id,
        name
        ${options ?  ', password' : ''}
    FROM user
    WHERE name = ?
    `

    // 获取结果
    const [data] = await connection.promise().query(statement , name)
    
    // 返回结果
    return data[0]; // 因为 name 字段在数据库中已经设置为唯一的了 , 结果就存在于第一项中 , 不存在会返回 undefiend
}


