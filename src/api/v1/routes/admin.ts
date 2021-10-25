import { Router } from 'express';
import AuthCtrl from '../controllers/auth';
import protect from '../middleware/auth';
import V1AdminRoutes from './v1admin';

class AdminRoutes {
  public router = Router(); // Initialize main router

  constructor() {
    this.initializeRoutes();
  }

  // Protect & Assign Routes to v1admin
  private initializeRoutes() {
    const authctrl = new AuthCtrl();
    const v1AdminRoutes = new V1AdminRoutes();
    this.router.use('/auth', authctrl.router);
    this.router.all('*', protect);
    this.router.use('/v1', v1AdminRoutes.router);
  }
}

export default AdminRoutes;
