import { Request } from 'express';
import Rest from '../../../models/Rest';
import Chef from '../../../models/Chef';

const restHandler = {
  getAll: async () => await Rest.find(), // Get all resturants
  get: async ({ params: { id } }: Request) => await Rest.findById(id), // Get resturant by id
  add: async ({ body }: Request) => {
    let chef = await Chef.findById(body.chef);
    let rest = await Rest.create(body);
    chef.rests.push(rest);
    chef.update();
    return rest;
  }, // Add resturant
  set: async ({ params: { id }, body }: Request) =>
    await Rest.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    }), // Edit resturant by id
  delete: async ({ params: { id }, body }: Request) => {
    let chef = await Chef.findById(body.chef);
    let rest = await Rest.findById(id);
    chef.rests = chef.rests.filter((id: any) => id !== rest._id);
    chef.update();
    rest.delete();
    return rest;
  }, // Delete resturant by id
};
export default restHandler;
