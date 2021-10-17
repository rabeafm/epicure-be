import BaseCtrl from './basectrl';
import DishCRUD from '../service/dishes';
import Dish from '../../../models/Dish';

class DishCtrl extends BaseCtrl {
  // Define Handler
  handler = new DishCRUD(Dish);

  // Define Messages
  protected messages = {
    getall: { success: `Show all dishes.`, failure: `No dishes in database.` }, // @access  Public
    get: { success: `Show Dish.`, failure: `Dish not found.` }, // @access  Public
    add: { success: `Dish created.`, failure: `Dish not Created.` }, // @access  Private
    update: { success: `Dish updated.`, failure: `Dish not updated.` }, // @access  Private
    delete: { success: 'Dish deleted', failure: 'Dish not Deleted' }, // @access  Private
  };
}

export default DishCtrl;