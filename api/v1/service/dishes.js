import Dish from "../../../models/Dish.js"; 
const dishHandler = {};

dishHandler.getAllDishes = async () => {     // Get all dishes
    return await Dish.find();
};

dishHandler.getDish = async ({ params: {id}}) => {  // Get dish by id
    return await Dish.findById(id);
};

dishHandler.addDish = async ({body}) => {    // Add dish
    return await Dish.create(body);
};

dishHandler.setDish = async ({ params: {id}, body}) => { // Edit dish by id
    return await Dish.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        });
};

dishHandler.deleteDish = async ({ params: {id}}) => { // Delete dish by id
    return await Dish.findByIdAndDelete(id);
};

export default dishHandler;