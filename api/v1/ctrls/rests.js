import { Router } from 'express';
import restHandler from '../service/rests.js';
const restRouter = Router();

// @desc    Get all resturants
// @route   GET /api/v1/rests
// @access  Public
restRouter.get('/', (req, res, next) => { 
    restHandler.getAllRests(res);
});

// @desc    Get single resturant
// @route   GET /api/v1/rests/:id
// @access  Public
restRouter.get('/:id', (req, res, next) => { 
    restHandler.getRest(req.params.id, res);
});

// @desc    Create new resturant
// @route   POST /api/v1/rests/
// @access  Private
restRouter.post('/', (req, res, next) => {
    restHandler.addRest(req.body, res);
});

// @desc    Update resturant
// @route   PUT /api/v1/rests/:id
// @access  Private
restRouter.put('/:id', (req, res, next) => { 
    restHandler.setRest(req.params.id, req.body, res);
});

// @desc    Delete resturant
// @route   DELETE /api/v1/rests/:id
// @access  Private
restRouter.delete('/:id', (req, res, next) => { 
    restHandler.deleteRest(req.params.id, res);
});

export default restRouter;