import { Router } from 'express';
import restHandler from '../service/rests.js';
const restRouter = Router();

restRouter.get('/', (req, res) => {     // Get all resturants 
    restHandler.getAllRests((err, result) => {
        if (err) throw err;
            res.json(result);
    });
});

restRouter.get('/:id', (req, res) => {  // Get resturant by id
    restHandler.getRest(req.params.id, (err, result) => {
        if (err) throw err;
                res.json(result);
    });
});

restRouter.post('/', (req, res) => {    // Add resturant
    const { name, image, chefid, dishesid } = req.body;
    restHandler.addRest(name, image, chefid, dishesid,
        (err, result) => {
            if (err) throw err;
                res.json(result);
        });
});

restRouter.put('/:id', (req, res) => {  // Edit resturant by id
    const { name, image, chefid, dishesid } = req.body;
    restHandler.setRest(req.params.id, name, image, chefid, dishesid,
        (err, result) => {
            if (err) throw err;
                res.json(result);
        });
});

restRouter.delete('/:id', (req, res) => { // Delete resturant by id
    const { name } = req.body;
    restHandler.deleteRest(req.params.id, name,
        (err, result) => {
            if (err) throw err;
                res.json(result);
        });
});

export default restRouter;