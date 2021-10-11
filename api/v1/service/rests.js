import Rest from "../../../models/Rest.js";

export default restHandler = {
    getAll:     async () => await Rest.find(),                                 // Get all resturants
    get:        async ({ params: {id}}) => await Rest.findById(id),            // Get resturant by id
    add:        async ({body}) => await Rest.create(body),                     // Add resturant
    set:        async ({ params: {id}, body}) => await Rest.findByIdAndUpdate(id, body, {
                        new: true,
                        runValidators: true
                }),                                                            // Edit resturant by id
    delete:     async ({ params: {id}}) => await Rest.findByIdAndDelete(id)    // Delete resturant by id
};