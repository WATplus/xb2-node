export interface TokenPayLoad{
    id? : number;
    name? : string;
    iat? : number
}

// 定义配置参数
export interface SignTokenOptions {
    payload? : any;
}

// 用户拥有内容的查询配置项
export interface PossessOpations {
    resourceType? : string,
    resourceId? : number,
    userId? : number
}

// 访问控制配置项
export interface AccessControlOpations{
    possession? : boolean
}