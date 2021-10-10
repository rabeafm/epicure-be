import { Router } from 'express';
import dishHandler from '../service/dishes.js'
const dishRouter = Router();

// @desc    Get all dishess
// @route   GET /api/v1/dishes
// @access  Public
dishRouter.get('/', (req, res, next) => { 
    dishHandler.getAllDishes(res);
});

// @desc    Get single dish
// @route   GET /api/v1/dishes/:id
// @access  Public
dishRouter.get('/:id', (req, res, next) => {
    dishHandler.getDish(req.params.id, res);
});

// @desc    Create new dish
// @route   POST /api/v1/dishes/
// @access  Private
dishRouter.post('/', (req, res, next) => {
    dishHandler.addDish(req.body, res);
});

// @desc    Update dish
// @route   PUT /api/v1/dishes/:id
// @access  Private
dishRouter.put('/:id', (req, res, next) => { 
    dishHandler.setDish(req.params.id, req.body, res);
});

// @desc    Delete chef
// @route   DELETE /api/v1/dishes/:id
// @access  Private
dishRouter.delete('/:id', (req, res, next) => {
    dishHandler.deleteDish(req.params.id, res);
});

export default dishRouter;