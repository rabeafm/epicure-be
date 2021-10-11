import Rest from "../../../models/Rest.js"; 
const restHandler = {};

restHandler.getAllRests = async () => {     // Get all resturants 
    return await Rest.find();
};

restHandler.getRest = async ({ params: {id}}) => {  // Get resturant by id
    return await Rest.findById(id);
};

restHandler.addRest = async ({body}) => {    // Add resturant
    return await Rest.create(body)
};

restHandler.setRest = async ({ params: {id}, body}) => { // Edit resturant by id
    return await Rest.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        });
};

restHandler.deleteRest = async ({ params: {id}}) => { // Delete resturant by id
    return await Rest.findByIdAndDelete(id);
};

export default restHandler;