import Dish from "../../../models/Dish.js"; 

export default dishHandler = {
    getAll:     async () => await Dish.find(),                                 // Get all dishes
    get:        async ({ params: {id}}) => await Dish.findById(id),            // Get dish by id
    add:        async ({body}) => await Dish.create(body),                     // Add dish
    set:        async ({ params: {id}, body}) => await Dish.findByIdAndUpdate(id, body, {
                        new: true,
                        runValidators: true
                }),                                                            // Edit dish by id
    delete:     async ({ params: {id}}) => await Dish.findByIdAndDelete(id)    // Delete dish by id
};