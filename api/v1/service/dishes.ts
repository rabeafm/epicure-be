import { Request } from 'express';
import BaseCRUD from './basecrud';
import Dish from '../../../models/Dish';
import Rest from '../../../models/Rest';

export default new (class DishCRUD extends BaseCRUD {
  // Override functions

  public add = async ({ body }: Request) => {
    let rest = await Rest.findById(body.resturant);
    let dish = await Dish.create(body);
    rest.dishes.push(dish);
    rest.save();
    return rest;
  }; // Add Dish & Update Resturant

  public delete = async ({ params: { id }, body }: Request) => {
    let rest = await Rest.findById(body.resturant);
    let dish = await Dish.findById(id);
    rest.dishes.pull(dish);
    rest.save();
    dish.delete();
    return dish;
  }; // Delete Dish & Update Resturant
})(Dish);
