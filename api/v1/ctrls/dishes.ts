import BaseCtrl from './basectrl';
import DishCRUD from '../service/dishes';

export default class DishCtrl extends BaseCtrl {
  // Define Handler
  handler = DishCRUD;

  // Define Messages
  protected messages = {
    getall: { succ: `Show all dishes.`, fail: `No dishes in database.` }, // @access  Public
    get: { succ: `Show Dish.`, fail: `Dish not found.` }, // @access  Public
    add: { succ: `Dish profile created.`, fail: `Dish profile not Created.` }, // @access  Private
    update: { succ: `Dish updated.`, fail: `Dish not updated.` }, // @access  Private
    delete: { succ: 'Dish deleted', fail: 'Dish not Deleted' }, // @access  Private
  };
}
