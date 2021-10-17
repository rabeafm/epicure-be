import BaseCtrl from './basectrl';
import RestCRUD from '../service/rests';
import Rest from '../../../models/Rest';

class RestCtrl extends BaseCtrl {
  // Define Handler
  handler = new RestCRUD(Rest);

  // Define Messages
  protected messages = {
    getall: {
      success: `Show all resturants.`,
      failure: `No resturants in database.`,
    }, // @access Public
    get: { success: `Show resturant.`, failure: `Resturant not found.` }, // @access  Public
    add: { success: `Resturant created.`, failure: `Resturant not Created.` }, // @access  Private
    update: {
      success: `Resturant updated.`,
      failure: `Resturant not updated.`,
    }, // @access  Private
    delete: { success: 'Resturant deleted', failure: 'Resturant not Deleted' }, // @access  Private
  };
}

export default RestCtrl;