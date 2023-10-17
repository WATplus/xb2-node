import express from "express"
import * as authContorller from "./auth.contorller"
import {author, validateLoginData } from "./auth.middleware"

const router = express.Router()

/**
 * 登录接口
 */
router.post(
    "/login" , 
    validateLoginData, 
    authContorller.login
)

/**
 * 验证接口
*/
router.post("/auth" , author , authContorller.validate)

export default router;