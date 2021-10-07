const chefHandler = {};

chefHandler.getAllChefs = (cb) => {     // Get all chefs 
    cb(null, "get all chefs")
};

chefHandler.getChef = (id, cb) => {  // Get chef by id
    cb(null, id);
};

chefHandler.addChef = (name, image, descr, rests, cb) => {    // Add chef
    cb(null, {name, image, descr, rests})
};

chefHandler.setChef = (id, name, image, descr, rests, cb) => { // Edit chef by id
    cb(null, {id, name, image, descr, rests})
};

chefHandler.deleteChef = (id, name, cb) => { // Delete chef by id
    cb(null, {id, name})
};

export default chefHandler;