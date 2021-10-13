import { Router } from 'express';
import chefRouter from './chefs';
import dishesRouter from './dishes';
import restsRouter from './rests';

import BaseCtrl from './basectrl';
import ChefCtrl from './chefs';

const router = Router();

const chefctrl = new ChefCtrl();
// main routes
router.use('/chefs', chefctrl.router);
router.use('/dishes', dishesRouter);
router.use('/rests', restsRouter);

export default router;
