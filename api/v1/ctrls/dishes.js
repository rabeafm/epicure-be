import { Router } from 'express';
import dishHandler from '../service/dishes.js'

const dishRouter = Router();

dishRouter.get('/', (req, res) => {     // Get all dishes 
    dishHandler.getAllDishes((err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

dishRouter.get('/:id', (req, res) => {  // Get dish by id
    dishHandler.getDish(req.query.dishid, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

dishRouter.post('/', (req, res) => {    // Add dish
    const { name, price, ingre, tags, restid } = req.body;
    dishHandler.addDish(name, price, ingre, tags, restid,
        (err, result) => {
            if (err) throw err;
            res.json(result);
        });
});

dishRouter.put('/:id', (req, res) => {  // Edit dish by id
    const { id, name, price, ingre, tags, restid } = req.body;
    dishHandler.setDish(id, name, price, ingre, tags, restid,
        (err, result) => {
            if (err) throw err;
            res.json(result);
        });
});

dishRouter.delete('/:id', (req, res) => { // Delete dish by id
    const { id, name } = req.body;
    dishHandler.deleteDish(id, name,
        (err, result) => {
            if (err) throw err;
            res.json(result);
        });
});

export default dishRouter;