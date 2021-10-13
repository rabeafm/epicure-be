import { Request, Response, NextFunction } from 'express';
import BaseCtrl from './basectrl';
import chefHandler from '../service/chefs';

export default class ChefCtrl extends BaseCtrl {
  //path = '/chefs';

  constructor() {
    super();
    this.router.get('/', this.getAllChefs.bind(this));
    this.router.get('/:id', this.getChef.bind(this));
    this.router.post('/', this.addChef.bind(this));
    this.router.put('/:id', this.updateChef.bind(this));
    this.router.delete('/:id', this.deleteChef.bind(this));
  }

  // @desc    Get all chefs
  // @route   GET /api/v1/chefs
  // @access  Public
  async getAllChefs(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    await this.responder(
      chefHandler.getAll,
      `Show all chefs.`,
      `No Chefs in database.`,
      req,
      res,
      next
    );
    next();
  }

  // @desc    Get single chef
  // @route   GET /api/v1/chefs/:id
  // @access  Public
  async getChef(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    await this.responder(
      chefHandler.get,
      `Show chef.`,
      `Chef not found.`,
      req,
      res,
      next
    );
    next();
  }

  // @desc    Create new chef
  // @route   POST /api/v1/chefs/
  // @access  Private
  async addChef(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    await this.responder(
      chefHandler.add,
      `Chef profile created.`,
      `Chef profile not Created.`,
      req,
      res,
      next
    );
    next();
  }

  // @desc    Update chef
  // @route   PUT /api/v1/chefs/:id
  // @access  Private
  async updateChef(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    await this.responder(
      chefHandler.set,
      `Chef Updated.`,
      `Chef not updated.`,
      req,
      res,
      next
    );
    next();
  }

  // @desc    Delete chef
  // @route   DELETE /api/v1/chefs/:id
  // @access  Private
  async deleteChef(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    await this.responder(
      chefHandler.delete,
      `Chef Deleted.`,
      `Chef not Deleted.`,
      req,
      res,
      next
    );
    next();
  }
}
