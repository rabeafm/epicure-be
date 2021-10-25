import { Router } from 'express';
import AdminRoutes from './api/v1/routes/admin';
import V1Routes from './api/v1/routes/v1';

class MainRoutes {
  public router = Router(); // Initialize main router

  constructor() {
    this.initializeRoutes();
  }

  // Assign Routes to admin & v1 routes
  private initializeRoutes() {
    const adminRoutes = new AdminRoutes();
    const v1Routes = new V1Routes();
    this.router.use('/admin', adminRoutes.router);
    this.router.use('/v1', v1Routes.router);
  }
}

export default MainRoutes;
