import { Request } from 'express';
import Rest from '../../../models/Rest.js';

const restHandler = {
  getAll: async () => await Rest.find(), // Get all resturants
  get: async ({ params: { id } }: Request) => await Rest.findById(id), // Get resturant by id
  add: async ({ body }: Request) => await Rest.create(body), // Add resturant
  set: async ({ params: { id }, body }: Request) =>
    await Rest.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    }), // Edit resturant by id
  delete: async ({ params: { id } }: Request) =>
    await Rest.findByIdAndDelete(id), // Delete resturant by id
};
export default restHandler;
