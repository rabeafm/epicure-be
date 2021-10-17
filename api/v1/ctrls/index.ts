import { Router } from 'express';
import ChefCtrl from './chefs';
import DishCtrl from './dishes';
import RestCtrl from './rests';

const router = Router();

// main routes
const chefctrl = new ChefCtrl();
const dishctrl = new DishCtrl();
const restctrl = new RestCtrl();

router.use('/chefs', chefctrl.router);
router.use('/dishes', dishctrl.router);
router.use('/rests', restctrl.router);

export default router;
