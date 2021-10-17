import BaseCtrl from './basectrl';
import ChefCRUD from '../service/chefs';
import Chef from '../../../models/Chef';

class ChefCtrl extends BaseCtrl {
  // Define Handler
  handler = new ChefCRUD(Chef);

  // Define Messages
  protected messages = {
    getall: { success: `Show all chefs.`, failure: `No Chefs in database.` }, // @access  Public
    get: { success: `Show chef.`, failure: `Chef not found.` }, // @access  Public
    add: { success: `Chef created.`, failure: `Chef not Created.` }, // @access  Private
    update: { success: `Chef updated.`, failure: `Chef not updated.` }, // @access  Private
    delete: { success: 'Chef deleted', failure: 'Chef not Deleted' }, // @access  Private
  };
}
export default ChefCtrl;
