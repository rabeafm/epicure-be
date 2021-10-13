import { Router, Request, Response, NextFunction } from 'express';
import restHandler from '../service/rests';
const restRouter = Router();

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

// @desc    Get all resturants
// @route   GET /api/v1/rests
// @access  Public
restRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  await responder(
    restHandler.getAll,
    `Show all resturants.`,
    `No resturants in database.`,
    req,
    res
  );
  next();
});

// @desc    Get single resturant
// @route   GET /api/v1/rests/:id
// @access  Public
restRouter.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    await responder(
      restHandler.get,
      `Show Resturant.`,
      `Resturant not found.`,
      req,
      res
    );
    next();
  }
);

// @desc    Create new resturant
// @route   POST /api/v1/rests/
// @access  Private
restRouter.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    await responder(
      restHandler.add,
      `Resturant profile created.`,
      `Resturant profile not created.`,
      req,
      res
    );
    next();
  }
);

// @desc    Update resturant
// @route   PUT /api/v1/rests/:id
// @access  Private
restRouter.put(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    await responder(
      restHandler.set,
      `Resturant updated.`,
      `Resturant not updated.`,
      req,
      res
    );
    next();
  }
);

// @desc    Delete resturant
// @route   DELETE /api/v1/rests/:id
// @access  Private
restRouter.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    await responder(
      restHandler.delete,
      `Resturant deleted.`,
      `Resturant not deleted.`,
      req,
      res
    );
    next();
  }
);

export default restRouter;
