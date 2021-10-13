import { Router } from 'express';
import ChefCtrl from './chefs';
import DishCtrl from './dishes';
import RestCtrl from './rests';

const router = Router();

// main routes
router.use('/chefs', new ChefCtrl().router);
router.use('/dishes', new DishCtrl().router);
router.use('/rests', new RestCtrl().router);

export default router;
