import express from 'express';
import { postevents, getevents, sumevents } from './controllers/financialcontroller.js';
import { validaUsuario } from '../middlewares/validateuser.js';

const financialRouter = express.Router();
router.post('/events', validaUsuario, postevents);
router.get('/events', validaUsuario, getevents);
router.get('/events/sum', validaUsuario, sumevents);
export default financialRouter;