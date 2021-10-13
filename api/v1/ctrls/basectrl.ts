import { Router, Request, Response, NextFunction } from 'express';
import BaseCRUD from '../service/basecrud';

export default abstract class BaseCtrl {
  public router: Router = Router();
  protected handler: BaseCRUD;

  /* General Messages* */
  protected messages = {
    getall: { succ: `Show all.`, fail: `None in database.` },
    get: { succ: `Show single.`, fail: `Single not found.` },
    add: { succ: `Single created.`, fail: `Single not Created.` },
    update: { succ: `Single updated.`, fail: `Single not updated.` },
    delete: { succ: 'Single deleted', fail: 'Single not Deleted' },
  };

  /* General Constructor */
  constructor() {
    this.router.get('/', this.getAll);
    this.router.get('/:id', this.get);
    this.router.post('/', this.add);
    this.router.put('/:id', this.update);
    this.router.delete('/:id', this.delete);
  }

  /* General Functions */
  // @desc    Get all
  // @route   GET '/'
  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    await this.responder(
      this.handler.getAll,
      this.messages.getall.succ,
      this.messages.getall.fail,
      req,
      res,
      next
    );
    next();
  };

  // @desc    Get single
  // @route   GET '/:id'
  public get = async (req: Request, res: Response, next: NextFunction) => {
    await this.responder(
      this.handler.get,
      this.messages.get.succ,
      this.messages.get.fail,
      req,
      res,
      next
    );
    next();
  };

  // @desc    Create new
  // @route   POST '/'
  public add = async (req: Request, res: Response, next: NextFunction) => {
    await this.responder(
      this.handler.add,
      this.messages.add.succ,
      this.messages.add.fail,
      req,
      res,
      next
    );
    next();
  };

  // @desc    Update Single
  // @route   PUT '/:id'
  public update = async (req: Request, res: Response, next: NextFunction) => {
    await this.responder(
      this.handler.set,
      this.messages.update.succ,
      this.messages.update.fail,
      req,
      res,
      next
    );
    next();
  };

  // @desc    Delete Single
  // @route   '/:id'
  public delete = async (req: Request, res: Response, next: NextFunction) => {
    await this.responder(
      this.handler.delete,
      this.messages.delete.succ,
      this.messages.delete.fail,
      req,
      res,
      next
    );
    next();
  };

  /* Response service function */
  async responder(
    hndlr: Function,
    sucmsg: string,
    failmsg: string,
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const data = await hndlr(req);
      if (!data) {
        res.status(400).json({ success: false, msg: failmsg });
      } else {
        res.status(200).json({
          success: true,
          msg: sucmsg,
          count: data.length,
          data: data,
        });
      }
    } catch (err: unknown) {
      res.status(400).json({ success: false, msg: err });
    }
  }
}
