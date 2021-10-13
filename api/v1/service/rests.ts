import { Request } from 'express';
import BaseCRUD from './basecrud';
import Rest from '../../../models/Rest';
import Chef from '../../../models/Chef';

export default new (class DishCRUD extends BaseCRUD {
  // change functions
  public add = async ({ body }: Request) => {
    let chef = await Chef.findById(body.chef);
    let rest = await Rest.create(body);
    chef.rests.push(rest);
    chef.save();
    return rest;
  }; // Add resturant & Update chef

  public delete = async ({ params: { id }, body }: Request) => {
    let chef = await Chef.findById(body.chef);
    let rest = await Rest.findById(id);
    chef.rests.pull(rest);
    chef.save();
    rest.delete();
    return rest;
  }; // Delete resturant & update chef
})(Rest);
