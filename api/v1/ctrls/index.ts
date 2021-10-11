import { Router } from 'express';
import chefRouter from './chefs.js';
import dishesRouter from './dishes.js';
import restsRouter from './rests.js';

const router = Router();

// main routes
router.use('/chefs', chefRouter);
router.use('/dishes', dishesRouter);
router.use('/rests', restsRouter);

export default router;
