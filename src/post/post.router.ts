import express from "express"
import * as postContorller from "./post.contorller"
import { requestUrl } from "../app/app.middleware";

/**
 * 创建接口
*/
const router = express.Router();

/**
 * 内容列表
 */
router.get("/posts" ,requestUrl, postContorller.index);

/**
 * 导出路由
 */

export default router