import { Request } from 'express';
import BaseCRUD from './basecrud';
import RestSchema from '../models/Rest';
import DishSchema from '../models/Dish';

class ChefCRUD extends BaseCRUD {
  /* For Modifications */

  public async getAll() {
    return await this.model
      .find()
      .select('-__v')
      .populate('rests', '-chef -dishes -__v')
      .exec();
  }

  public async get({ params: { id } }: Request) {
    return await this.model
      .findById(id)
      .select('-__v')
      .populate({
        path: 'rests',
        select: '-__v -chef',
        populate: {
          path: 'dishes',
          select: '-__v -resturant -ingredients -tags -price',
        },
      })
      .exec();
  }

  public async delete({ params: { id } }: Request) {
    let chef = await this.model.findById(id);
    chef.rests.map(async (id: string) => {
      await RestSchema.findByIdAndDelete(id);
      await DishSchema.deleteMany({ resturant: id });
    });
    return await this.model.findByIdAndDelete(id);
  }
}

export default ChefCRUD;
