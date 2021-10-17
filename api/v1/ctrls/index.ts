import { Router } from 'express';
import ChefCtrl from './chefs'; // Import controllers classes
import DishCtrl from './dishes';
import RestCtrl from './rests';

const router = Router(); // Initialize main router

// Create Instances of Main Controllers
const chefctrl = new ChefCtrl();
const dishctrl = new DishCtrl();
const restctrl = new RestCtrl();

// Assign Routes to Controllers Routers
router.use('/chefs', chefctrl.router);
router.use('/dishes', dishctrl.router);
router.use('/rests', restctrl.router);

export default router;
