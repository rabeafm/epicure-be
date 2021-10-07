import { Router } from 'express';
import chefHandler from '../service/chefs.js'

const chefRouter = Router();
//const chefs = require('../service/chefs.js');

chefRouter.get('/', (req, res) => {     // Get all chefs 
     chefHandler.getAllChefs()//(//err, result) => {}
    //     if (err) throw err;
    //     res.json(result);
    // });
});

chefRouter.get('/:id', (req, res) => {  // Get chef by id
    console.log(`get chefs ${1}`)
    // chefHandler.getChef(req.query.chefid, (err, result) => {
    //     if (err) throw err;
    //     res.json(result);
    // });
});

chefRouter.post('/', (req, res) => {    // Add chef
    // const { name, image, descr, rests } = req.body;
    // chefHandler.addChef(name, image, descr, rests,
    //     (err, result) => {
    //         if (err) throw err;
    //         res.json(result);
    //     });
});

chefRouter.put('/:id', (req, res) => {  // Edit chef by id
    // const { id, name, image, descr, rests } = req.body;
    // chefHandler.setChef(id, name, image, descr, rests,
    //     (err, result) => {
    //         if (err) throw err;
    //         res.json(result);
    //     });
});

chefRouter.delete('/:id', (req, res) => {  // Delete chef by id
    // const { id, name } = req.body;
    // chefHandler.deleteChef(id, name,
    //     (err, result) => {
    //         if (err) throw err;
    //         res.json(result);
    //     });
});

export default chefRouter;