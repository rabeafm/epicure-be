import { Request } from 'express';
import BaseCRUD from './basecrud';
import Rest from '../../../models/Rest';
import Dish from '../../../models/Dish';

class ChefCRUD extends BaseCRUD {
  /* For Modifications */

  public async getAll() {
    return await this.model.find().populate('rests', '-chef -dishes').exec();
  }

  public async get({ params: { id } }: Request) {
    return await this.model
      .findById(id)
      .populate({ path: 'rests', populate: { path: 'dishes' } })
      .exec();
  }

  public async delete({ params: { id } }: Request) {
    let chef = await this.model.findById(id);
    chef.rests.map(async (id: string) => {
      await Rest.findByIdAndDelete(id);
      await Dish.deleteMany({ resturant: id });
    });
    return await this.model.findByIdAndDelete(id);
  }
}

export default ChefCRUD;
