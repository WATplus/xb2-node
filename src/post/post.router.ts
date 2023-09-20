import express from "express"
import * as postContorller from "./post.contorller"

/**
 * 创建接口
*/
const router = express.Router();

/**
 * 内容列表
 */
router.get("/posts" , postContorller.index);

/**
 * 导出路由
 */

export default router