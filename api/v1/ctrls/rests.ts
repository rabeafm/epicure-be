import BaseCtrl from './basectrl';
import RestCRUD from '../service/rests';

export default class DishCtrl extends BaseCtrl {
  // Define Handler
  handler = RestCRUD;

  // Define Messages
  protected messages = {
    getall: { succ: `Show all resturants.`, fail: `No resturants in database.` }, // @access Public
    get: { succ: `Show resturant.`, fail: `Resturant not found.` }, // @access  Public
    add: { succ: `Resturant created.`, fail: `Resturant not Created.` }, // @access  Private
    update: { succ: `Resturant updated.`, fail: `Resturant not updated.` }, // @access  Private
    delete: { succ: 'Resturant deleted', fail: 'Resturant not Deleted' }, // @access  Private
  };
}
