import express from 'express';
import userRouter from './userrouter.js';
import financialRouter from './financialrouter.js';

const router = express.Router();
router.use(userRouter);
router.use(financialRouter);
export default router;