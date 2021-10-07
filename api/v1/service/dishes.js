const dishHandler = {};

dishHandler.getAllDishes = (cb) => {     // Get all dishes 
    cb(null, "get all dishes")
};

dishHandler.getDish = (id, cb) => {  // Get dish by id
    cb(null, id);
};

dishHandler.addDish = (name, price, ingre, tags, restid, cb) => {    // Add dish
    cb(null, {name, price, ingre, tags, restid})
};

dishHandler.setDish = (id, name, price, ingre, tags, restid,cb) => { // Edit dish by id
    cb(null, {id, name, price, ingre, tags, restid})
};

dishHandler.deleteDish = (id, name, cb) => { // Delete dish by id
    cb(null, {id, name})
};

export default dishHandler;