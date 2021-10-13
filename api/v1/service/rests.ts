import BaseCRUD from './basecrud';
import Rest from '../../../models/Dish';

export default new (class DishCRUD extends BaseCRUD {
  
  // change functions
  //   add: async ({ body }: Request) => {
  //     let chef = await Chef.findById(body.chef);
  //     let rest = await Rest.create(body);
  //     chef.rests.push(rest);
  //     chef.update();
  //     return rest;
  //   }, // Add resturant
  //   delete: async ({ params: { id }, body }: Request) => {
  //     let chef = await Chef.findById(body.chef);
  //     let rest = await Rest.findById(id);
  //     chef.rests = chef.rests.filter((id: any) => id !== rest._id);
  //     chef.update();
  //     rest.delete();
  //     return rest;
  //   }, // Delete resturant by id
})(Rest);