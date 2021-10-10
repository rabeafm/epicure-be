import Dish from "../../../models/Dish.js"; 

const dishHandler = {};

dishHandler.getAllDishes = async (res) => {     // Get all dishes
    try {
        const dishes = await Dish.find();
        res.status(200).json({ success: true, msg: `get all dishes.`, count: dishes.length, data: dishes});
    } catch (err) {
        res.status(400).json({ success: false })
    }
};

dishHandler.getDish = async (id, res) => {  // Get dish by id
    try {
        const dish = await Dish.findById(id);
        if(!dish)
            return res.status(400).json({ success: false, msg: `Dish not found.`});    
        res.status(200).json({ success: true, msg: `Show dish.`, data: dish});
    } catch (err) {
        res.status(400).json({ success: false})
    }
};

dishHandler.addDish = async (body, res) => {    // Add dish
    try {
        const dish = await Dish.create(body)
        res.status(201).json({ success: true, msg: `Dish created.`, data: dish});
    } catch (err) {
        res.status(400).json({ success: false })
    }
};

dishHandler.setDish = async (id, body, res) => { // Edit dish by id
    try {
        const dish = await Dish.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        });
        if(!dish)
            return res.status(400).json({ success: false});    
        res.status(200).json({ success: true, msg: `Dish Updated.`, data: dish});
    } catch (err) {
        res.status(400).json({ success: false})
    }
};

dishHandler.deleteDish = async (id, res) => { // Delete dish by id
    try {
        const dish = await Dish.findByIdAndDelete(id);
        if(!dish)
            return res.status(400).json({ success: false});    
        res.status(200).json({ success: true, msg: `Dish Deleted.`, data: {}});
    } catch (err) {
        res.status(400).json({ success: false})
    }
};

export default dishHandler;