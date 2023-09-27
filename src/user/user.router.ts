import express from 'express'
import * as userContorller from './user.contorller'
import { hashPassword, validateUserData } from './user.middleware';

/**
 * 定义路由
 */
const router = express.Router();

/**
 * 添加数据的接口
 */
router.post("/users" ,validateUserData, hashPassword ,userContorller.store)

/**
 * 导出路由 
 */
export default router;