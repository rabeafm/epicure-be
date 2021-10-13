import { Router, Request, Response, NextFunction } from 'express';

export default abstract class BaseCtrl {
  

  public router: Router = Router();

  async responder(
    hndlr: Function,
    sucmsg: string,
    failmsg: string,
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const data = await hndlr();
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

  protected sendSuccess(
    res: Response,
    data: object,
    message?: string
  ): Response {
    return res.status(200).json({
      message: message || 'success',
      data: data,
    });
  }

  protected sendError(res: Response, message?: string): Response {
    return res.status(500).json({
      message: message || 'internal server error',
    });
  }
}
