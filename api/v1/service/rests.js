const restHandler = {};

restHandler.getAllRests = (cb) => {     // Get all resturants 
    cb(null, "get all resturants")
};

restHandler.getRest = (id, cb) => {  // Get resturant by id
    cb(null, id);
};

restHandler.addRest = (name, image, chefid, dishesid, cb) => {    // Add resturant
    cb(null, {name, image, chefid, dishesid});
};

restHandler.setRest = (id, name, image, chefid, dishesid, cb) => { // Edit resturant by id
    cb(null, {id, name, image, chefid, dishesid});
};

restHandler.deleteRest = (id, name, cb) => { // Delete resturant by id
    cb(null, {id, name});
};

export default restHandler;