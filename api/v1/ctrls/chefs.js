import { Router } from 'express';
import chefHandler from '../service/chefs.js'
const chefRouter = Router();

// @desc    Get all chefs
// @route   GET /api/v1/chefs
// @access  Public
chefRouter.get('/', (req, res, next) => { 
    chefHandler.getAllChefs(res);
});

// @desc    Get single chef
// @route   GET /api/v1/chefs/:id
// @access  Public
chefRouter.get('/:id', (req, res, next) => { 
    chefHandler.getChef(req.params.id, res);
});

// @desc    Create new chef
// @route   POST /api/v1/chefs/
// @access  Private
chefRouter.post('/', (req, res, next) => {    
    chefHandler.addChef(req.body, res);
});

// @desc    Update chef
// @route   PUT /api/v1/chefs/:id
// @access  Private
chefRouter.put('/:id', (req, res, next) => {  
    chefHandler.setChef(req.params.id, req.body, res);
});


// @desc    Delete chef
// @route   DELETE /api/v1/chefs/:id
// @access  Private
chefRouter.delete('/:id', (req, res, next) => { 
    chefHandler.deleteChef(req.params.id, res);
});

export default chefRouter;