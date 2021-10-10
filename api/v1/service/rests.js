import Rest from "../../../models/Rest.js"; 

const restHandler = {};

restHandler.getAllRests = async (res) => {     // Get all resturants 
    try {
        const rests = await Rest.find();
        res.status(200).json({ success: true, msg: `get all resturants.`, count: rests.length, data: rests});
    } catch (err) {
        res.status(400).json({ success: false })
    }
};

restHandler.getRest = async (id, res) => {  // Get resturant by id
    try {
        const rest = await Rest.findById(id);
        if(!rest)
            return res.status(400).json({ success: false, msg: `Resturant not found.`});    
        res.status(200).json({ success: true, msg: `Show Resturant.`, data: rest});
    } catch (err) {
        res.status(400).json({ success: false})
    }
};

restHandler.addRest = async (body, res) => {    // Add resturant
    try {
        const rest = await Rest.create(body)
        res.status(201).json({ success: true, msg: `Resturant profile created.`, data: rest});
    } catch (err) {
        res.status(400).json({ success: false })
    }
};

restHandler.setRest = async (id, body, res) => { // Edit resturant by id
    try {
        const rest = await Rest.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        });
        if(!rest)
            return res.status(400).json({ success: false});    
        res.status(200).json({ success: true, msg: `Resturant Updated.`, data: rest});
    } catch (err) {
        res.status(400).json({ success: false})
    }
};

restHandler.deleteRest = async (id, res) => { // Delete resturant by id
    try {
        const rest = await Rest.findByIdAndDelete(id);
        if(!rest)
            return res.status(400).json({ success: false});    
        res.status(200).json({ success: true, msg: `Resturant Deleted.`, data: {}});
    } catch (err) {
        res.status(400).json({ success: false})
    }
};

export default restHandler;