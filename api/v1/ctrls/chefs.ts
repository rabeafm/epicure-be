import { Router, Request, Response, NextFunction } from 'express';
import chefHandler from '../service/chefs.js';
const chefRouter = Router();

const responder = async (
  hndlr: Function,
  sucmsg: string,
  failmsg: string,
  req: Request,
  res: Response
) => {
  try {
    const data = await hndlr(req);
    if (!data) res.status(400).json({ success: false, msg: failmsg });
    else
      res
        .status(200)
        .json({ success: true, msg: sucmsg, count: data.length, data: data });
  } catch (err: unknown) {
    res.status(400).json({ success: false, msg: err });
  }
};

// @desc    Get all chefs
// @route   GET /api/v1/chefs
// @access  Public
chefRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  await responder(
    chefHandler.getAll,
    `Show all chefs.`,
    `No Chefs in database.`,
    req,
    res
  );
  next();
});

// @desc    Get single chef
// @route   GET /api/v1/chefs/:id
// @access  Public
chefRouter.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    await responder(chefHandler.get, `Show chef.`, `Chef not found.`, req, res);
    next();
  }
);

// @desc    Create new chef
// @route   POST /api/v1/chefs/
// @access  Private
chefRouter.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    await responder(
      chefHandler.add,
      `Chef profile created.`,
      `Chef profile not Created.`,
      req,
      res
    );
    next();
  }
);

// @desc    Update chef
// @route   PUT /api/v1/chefs/:id
// @access  Private
chefRouter.put(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    await responder(
      chefHandler.set,
      `Chef Updated.`,
      `Chef not updated.`,
      req,
      res
    );
    next();
  }
);

// @desc    Delete chef
// @route   DELETE /api/v1/chefs/:id
// @access  Private
chefRouter.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    await responder(
      chefHandler.delete,
      `Chef Deleted.`,
      `Chef not Deleted.`,
      req,
      res
    );
    next();
  }
);

export default chefRouter;
