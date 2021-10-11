import Chef from '../../../models/Chef.js'

export default chefHandler = {
    getAll:     async () => await Chef.find(),                                 // Get all chefs
    get:        async ({ params: {id}}) => await Chef.findById(id),            // Get chef by id
    add:        async ({body}) => await Chef.create(body),                     // Add chef
    set:        async ({ params: {id}, body}) => await Chef.findByIdAndUpdate(id, body, {
                        new: true,
                        runValidators: true
                }),                                                            // Edit chef by id
    delete:     async ({ params: {id}}) => await Chef.findByIdAndDelete(id)    // Delete chef by id
};