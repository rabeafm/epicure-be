import { Request } from 'express';
import BaseCRUD from './basecrud';
import ChefSchema from '../models/Chef';
import DishSchema from '../models/Dish';

class RestCRUD extends BaseCRUD {
  // Override functions

  public async getAll() {
    return await this.model
      .find()
      .select('-__v')
      .populate('chef', '-__v -descr')
      .populate('dishes', '-__v -resturant -ingredients -tags')
      .exec();
  }

  public async get({ params: { id } }: Request) {
    return await this.model
      .findById(id)
      .select('-__v')
      .populate('chef', '-__v -descr')
      .populate('dishes', '-__v -resturant')
      .exec();
  }

  public async add({ body }: Request) {
    let rest = await this.model.create(body);
    await ChefSchema.findOneAndUpdate(
      { _id: body.chef },
      { $push: { rests: rest } }
    );
    return rest;
  } // Add resturant & Update chef

  public async delete({ params: { id }, body }: Request) {
    await ChefSchema.findOneAndUpdate(
      { _id: body.chef },
      { $pull: { rests: id } }
    );
    let rest = await this.model.findByIdAndDelete(id);
    await DishSchema.deleteMany({ resturant: id });
    return rest;
  } // Delete resturant & update chef
}

export default RestCRUD;
