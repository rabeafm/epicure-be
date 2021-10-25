import { Router } from 'express';
import ChefCtrl from '../controllers/chefs'; // Import controllers classes
import DishCtrl from '../controllers/dishes';
import RestCtrl from '../controllers/rests';

class V1AdminRoutes {
  public router = Router(); // Initialize main router

  constructor() {
    this.initializeRoutes();
  }

  // Assign Routes to Controllers
  private initializeRoutes() {
    // Create Instances of Main Controllers
    const chefctrl = new ChefCtrl();
    const dishctrl = new DishCtrl();
    const restctrl = new RestCtrl();

    // Assign Routes to Controllers Routers
    this.router.use('/chefs', chefctrl.router);
    this.router.use('/dishes', dishctrl.router);
    this.router.use('/rests', restctrl.router);
  }
}

export default V1AdminRoutes;
