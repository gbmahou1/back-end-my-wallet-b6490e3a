import express from 'express';
import { signin, signup } from './controllers/usercontroller.js';

const userRouter = express.Router();
router.post('/signin', signin);
router.post('/signup', signup);
export default userRouter;