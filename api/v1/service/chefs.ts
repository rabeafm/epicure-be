import { Request } from 'express';
import Chef from '../../../models/Chef.js';

const chefHandler = {
  getAll: async () => await Chef.find(), // Get all chefs
  get: async ({ params: { id } }: Request) => await Chef.findById(id), // Get chef by id
  add: async ({ body }: Request) => await Chef.create(body), // Add chef
  set: async ({ params: { id }, body }: Request) =>
    await Chef.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    }), // Edit chef by id
  delete: async ({ params: { id } }: Request) =>
    await Chef.findByIdAndDelete(id), // Delete chef by id
};

export default chefHandler;
/*
Add some data for all the content types.
Fix mongo queries
Create on the server a Search call that searches for all the content types. After creating it, we need to use this call in the Search input on the Frontend.
Search for an ingredient that appears on many dishes: if we click on one of the ingredients of a dish, we need to show all the dishes containing that ingredient.
*/
