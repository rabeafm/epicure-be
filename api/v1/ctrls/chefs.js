import { Router } from 'express';
import chefHandler from '../service/chefs.js'
const chefRouter = Router();

chefRouter.get('/', (req, res) => {     // Get all chefs 
     chefHandler.getAllChefs((err, result) => {
        if (err) throw err;
            res.json(result);
    });
});

chefRouter.get('/:id', (req, res) => {  // Get chef by id
    chefHandler.getChef(req.params.id, (err, result) => {
        if (err) throw err;
            res.json(result);
    });
});

chefRouter.post('/', (req, res) => {    // Add chef
    const { name, image, descr, rests } = req.body;
    chefHandler.addChef(name, image, descr, rests,
        (err, result) => {
            if (err) throw err;
                res.json(result);
        });
});

chefRouter.put('/:id', (req, res) => {  // Edit chef by id
    const { name, image, descr, rests } = req.body;
    chefHandler.setChef(req.params.id, name, image, descr, rests,
        (err, result) => {
            if (err) throw err;
            res.json(result);
        });
});

chefRouter.delete('/:id', (req, res) => {  // Delete chef by id
    const { name } = req.body;
    chefHandler.deleteChef(req.params.id, name,
        (err, result) => {
            if (err) throw err;
            res.json(result);
        });
});

export default chefRouter;