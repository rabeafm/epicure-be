import BaseCtrl from './basectrl';
import ChefCRUD from '../service/chefs';

export default class ChefCtrl extends BaseCtrl {
  // Define Handler
  handler = ChefCRUD;

  // Define Messages
  protected messages = {
    getall: { succ: `Show all chefs.`, fail: `No Chefs in database.` }, // @access  Public
    get: { succ: `Show chef.`, fail: `Chef not found.` }, // @access  Public
    add: { succ: `Chef profile created.`, fail: `Chef profile not Created.` }, // @access  Private
    update: { succ: `Chef updated.`, fail: `Chef not updated.` }, // @access  Private
    delete: { succ: 'Chef deleted', fail: 'Chef not Deleted' }, // @access  Private
  };
}
