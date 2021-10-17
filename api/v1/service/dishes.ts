import { Request } from 'express';
import BaseCRUD from './basecrud';
import Rest from '../../../models/Rest';

class DishCRUD extends BaseCRUD {
  // Override functions

  public async add({ body }: Request) {
    let dish = await this.model.create(body);
    await Rest.findOneAndUpdate(
      { _id: body.resturant },
      { $push: { dishes: dish } }
    );
    return dish;
  } // Add Dish & Update Resturant

  public async delete({ params: { id }, body }: Request) {
    await Rest.findOneAndUpdate(
      { _id: body.resturant },
      { $pull: { dishes: id } }
    );
    return await this.model.findByIdAndDelete(id);
  } // Delete Dish & Update Resturant
}

export default DishCRUD;
