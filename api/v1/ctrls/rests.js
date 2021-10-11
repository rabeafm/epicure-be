import { Router } from 'express';
import restHandler from '../service/rests.js';
const restRouter = Router();

const responder = async (hndlr, sucmsg, failmsg, req, res) => {
    try {
        const data = await hndlr(req);
        if(!data)
            res.status(400).json({ success: false, msg: failmsg});
        else
            res.status(200).json({ success: true, msg: sucmsg, count: data.length, data: data});
    } catch (err) {
        res.status(400).json({ success: false, msg: err.message })
    } 
}

// @desc    Get all resturants
// @route   GET /api/v1/rests
// @access  Public
restRouter.get('/', async (req, res, next) => {
    await responder(restHandler.getAll,`Show all resturants.`,`No resturants in database.`,req,res);
    next();
});

// @desc    Get single resturant
// @route   GET /api/v1/rests/:id
// @access  Public
restRouter.get('/:id', async (req, res, next) => { 
    await responder(restHandler.get,`Show Resturant.`,`Resturant not found.`,req,res);
    next();
});

// @desc    Create new resturant
// @route   POST /api/v1/rests/
// @access  Private
restRouter.post('/', async (req, res, next) => {
    await responder(restHandler.add,`Resturant profile created.`,`Resturant profile not created.`,req,res);
    next();
});

// @desc    Update resturant
// @route   PUT /api/v1/rests/:id
// @access  Private
restRouter.put('/:id', async (req, res, next) => { 
    await responder(restHandler.set,`Resturant updated.`,`Resturant not updated.`,req,res);
    next();
});

// @desc    Delete resturant
// @route   DELETE /api/v1/rests/:id
// @access  Private
restRouter.delete('/:id', async (req, res, next) => {
    await responder(restHandler.delete,`Resturant deleted.`,`Resturant not deleted.`,req,res);
    next();
});

export default restRouter;