const fs = require('fs'); // nodeJS 中的文件系统
const path = require("path"); // 用于路径操作

/**
 * 读物公秘钥文件
 */
const privateKey = fs.readFileSync(path.join("config", "private.key"))
const publicKey = fs.readFileSync(path.join("config", "public.key"))

/**
 * 转换秘钥文件
 */

const privateKeyBase64 = Buffer.from(privateKey).toString("base64");
const publicKeyBase64 = Buffer.from(publicKey).toString("base64");

/**
 * 输出准换结果
 */
console.log("\n private Key");
console.log(privateKeyBase64);
console.log("\n public Key");
console.log(publicKeyBase64);