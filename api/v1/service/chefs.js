import Chef from '../../../models/Chef.js'
const chefHandler = {};

chefHandler.getAllChefs = async (res) => {     // Get all chefs
    try {
        const chefs = await Chef.find();
        res.status(200).json({ success: true, msg: `Show all chefs.`, count: chefs.length, data: chefs});
    } catch (err) {
        res.status(400).json({ success: false })
    }
};

chefHandler.getChef = async (id, res) => {  // Get chef by id
    try {
        const chef = await Chef.findById(id);
        if(!chef)
            return res.status(400).json({ success: false, msg: `Chef not found.`});    
        res.status(200).json({ success: true, msg: `Show chef.`, data: chef});
    } catch (err) {
        res.status(400).json({ success: false})
    }
};

chefHandler.addChef = async (body, res) => {    // Add chef
    try {
        const chef = await Chef.create(body)
        res.status(201).json({ success: true, msg: `Chef profile created.`, data: chef});
    } catch (err) {
        res.status(400).json({ success: false })
    }
};

chefHandler.setChef = async (id, body, res) => { // Edit chef by id
    try {
        const chef = await Chef.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        });
        if(!chef)
            return res.status(400).json({ success: false});    
        res.status(200).json({ success: true, msg: `Chef Updated.`, data: chef});
    } catch (err) {
        res.status(400).json({ success: false})
    }
};

chefHandler.deleteChef = async (id, res) => { // Delete chef by id
    try {
        const chef = await Chef.findByIdAndDelete(id);
        if(!chef)
            return res.status(400).json({ success: false});    
        res.status(200).json({ success: true, msg: `Chef Deleted.`, data: {}});
    } catch (err) {
        res.status(400).json({ success: false})
    }
};

export default chefHandler;