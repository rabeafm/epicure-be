import { Request } from 'express';
import BaseCRUD from './basecrud';
import Chef from '../../../models/Chef';
import Dish from '../../../models/Dish';

class RestCRUD extends BaseCRUD {
  // Override functions

  public async getAll() {
    return await this.model.find().populate('dishes', '-resturant').exec();
  }

  public async get({ params: { id } }: Request) {
    return await this.model.findById(id).populate('dishes').exec();
  }

  public async add({ body }: Request) {
    let rest = await this.model.create(body);
    await Chef.findOneAndUpdate({ _id: body.chef }, { $push: { rests: rest } });
    return rest;
  } // Add resturant & Update chef

  public async delete({ params: { id }, body }: Request) {
    await Chef.findOneAndUpdate({ _id: body.chef }, { $pull: { rests: id } });
    let rest = await this.model.findByIdAndDelete(id);
    await Dish.deleteMany({ resturant: id });
    return rest;
  } // Delete resturant & update chef
}

export default RestCRUD;
