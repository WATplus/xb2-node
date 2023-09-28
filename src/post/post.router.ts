import express from "express"
import * as postContorller from "./post.contorller"
import { requestUrl } from "../app/app.middleware";
import { author } from "../auth/auth.middleware";

/**
 * 创建接口
*/
const router = express.Router();

/**
 * 内容列表
 */
router.get("/posts" ,requestUrl, postContorller.index);

/**
 * 存储数据
*/
router.post("/posts" , requestUrl , author , postContorller.store);

/**
 * 更改数据
*/
router.patch('/posts/:postId' , postContorller.update);

/**
 * 删除
 */
router.delete("/posts/:postId" , postContorller.destroy)


/**
 * 导出路由
 */

export default router