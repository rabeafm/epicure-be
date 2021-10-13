import BaseCRUD from './basecrud';
import Dish from '../../../models/Dish';

export default new (class DishCRUD extends BaseCRUD {
  
  // change functions
  //   add: async ({ body }: Request) => await Dish.create(body), // Add dish
  //   delete: async ({ params: { id } }: Request) => await Dish.findByIdAndDelete(id), // Delete dish by id
})(Dish);
