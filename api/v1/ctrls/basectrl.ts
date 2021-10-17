import { Router, Request, Response } from 'express';

class BaseCtrl {
  public router: Router = Router();
  protected handler: any;

  /* General messages for returned values */
  protected messages = {
    getall: { success: `Show all.`, failure: `None in database.` },
    get: { success: `Show single.`, failure: `Single not found.` },
    add: { success: `Single created.`, failure: `Single not Created.` },
    update: { success: `Single updated.`, failure: `Single not updated.` },
    delete: { success: 'Single deleted', failure: 'Single not Deleted' },
  };

  /* General constructor which sets the function to be used based on routes */
  constructor() {
    this.router.get('/', this.getAll.bind(this));
    this.router.get('/:id', this.get.bind(this));
    this.router.post('/', this.add.bind(this));
    this.router.put('/:id', this.update.bind(this));
    this.router.delete('/:id', this.delete.bind(this));
  }

  /* General Functions */
  /** Get all elements from Database (route GET '/').
   * @param req Http Request
   * @param res Http Response
   * @return Promise                                 */
  public async getAll(req: Request, res: Response) {
    await this.responder(
      this.handler.getAll.bind(this.handler),
      this.messages.getall.success,
      this.messages.getall.failure,
      req,
      res
    );
  }

  /** Get single element from Database (route GET '/:id').
   * @param req Http Request
   * @param res Http Response
   * @return Promise                                 */
  public async get(req: Request, res: Response) {
    await this.responder(
      this.handler.get.bind(this.handler),
      this.messages.get.success,
      this.messages.get.failure,
      req,
      res
    );
  }

  /** Add single element to Database (route POST '/').
   * @param req Http Request
   * @param res Http Response
   * @return Promise                                 */
  public async add(req: Request, res: Response) {
    await this.responder(
      this.handler.add.bind(this.handler),
      this.messages.add.success,
      this.messages.add.failure,
      req,
      res
    );
  }

  /** Update single element in Database (route PUT '/:id').
   * @param req Http Request
   * @param res Http Response
   * @return Promise                                 */
  public async update(req: Request, res: Response) {
    await this.responder(
      this.handler.set.bind(this.handler),
      this.messages.update.success,
      this.messages.update.failure,
      req,
      res
    );
  }

  /** Delete single element from Database (route DELETE '/:id').
   * @param req Http Request
   * @param res Http Response
   * @return Promise                                        */
  public async delete(req: Request, res: Response) {
    await this.responder(
      this.handler.delete.bind(this.handler),
      this.messages.delete.success,
      this.messages.delete.failure,
      req,
      res
    );
  }

  /* Response service function */
  /** Data retrieval and manipulation function, recieves function,
   *  messages, request & response. fetches data and returns proper
   *  message and data based on function.
   * @param handler service function needed for data retrieval
   * @param successmsg message in case of success
   * @param failuremsg message in case of failure
   * @param req Http Request
   * @param res Http Response
   * @return Promise                                 */
  private async responder(
    handler: Function,
    successmsg: string,
    failuremsg: string,
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const data = await handler(req);
      if (!data) {
        res.status(400).json({ success: false, msg: failuremsg });
      } else {
        res.status(200).json({
          success: true,
          msg: successmsg,
          count: data.length,
          data: data,
        });
      }
    } catch (err: unknown) {
      res.status(400).json({ success: false, msg: err as Error });
    }
  }
}

export default BaseCtrl;
