import express from "express"
import * as authContorller from "./auth.contorller"
import { validateLoginData } from "./auth.middleware"

const router = express.Router()

/**
 * 登录接口
 */
router.post("/login" , validateLoginData , authContorller.login)

export default router;