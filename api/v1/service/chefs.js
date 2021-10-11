import Chef from '../../../models/Chef.js'
const chefHandler = {};

chefHandler.getAllChefs = async () => {     // Get all chefs
    return await Chef.find();
};

chefHandler.getChef = async ({ params: {id}}) => {  // Get chef by id
   return await Chef.findById(id);
};

chefHandler.addChef = async ({body}) => {    // Add chef
    return await Chef.create(body)
};

chefHandler.setChef = async ({ params: {id}, body}) => { // Edit chef by id
    return await Chef.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        })
};

chefHandler.deleteChef = async ({ params: {id}}) => { // Delete chef by id
    return await Chef.findByIdAndDelete(id);
};

export default chefHandler;