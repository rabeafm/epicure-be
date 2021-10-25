import BaseCtrl from './basectrl';
import ChefCRUD from '../services/chefs';
import ChefSchema from '../models/Chef';

class ChefCtrl extends BaseCtrl {
  // Define Handler
  handler = new ChefCRUD(ChefSchema);

  // Define Messages
  protected messages = {
    getall: { success: `Show all chefs.`, failure: `No Chefs in database.` }, // @access  Public
    get: { success: `Show chef.`, failure: `Chef not found.` }, // @access  Public
    add: { success: `Chef created.`, failure: `Chef not Created.` }, // @access  Private
    update: { success: `Chef updated.`, failure: `Chef not updated.` }, // @access  Private
    delete: { success: 'Chef deleted', failure: 'Chef not Deleted' }, // @access  Private
  };
}

/**
 *  @api {get} /chefs  Get all chefs
 *  @apiName GetAllChefs
 *  @apiGroup Chefs
 * 
 *  @apiSuccess {Boolean}  success success status.
 *  @apiSuccess {String}   msg messsage from api.
 *  @apiSuccess {Number}   count length of array.
 *  @apiSuccess {Array}    data array of chefs.
 *
 *  @apiSuccessExample Success-Response:
 *  {
    "success": true,
    "msg": "Show all chefs.",
    "count": 2,
    "data": [
        {
            "_id": "616bc6433c23df64055e9b11",
            "name": "Robert De Niro",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Britney_Spears_2013_%28Straighten_Crop%29.jpg/440px-Britney_Spears_2013_%28Straighten_Crop%29.jpg",
            "descr": "fans wonder whether Britney Spears ever mentioned her troubling experiences with fame in her  beloved starlet who cries, cries behind closed doors. Or maybe they say I'm Not A Girl, Not ge ballad in which Spears acknowledges through song that life doesn't always go my way.",
            "rests": [ rest1, rest2 ]
        },
        {
            "_id": "616bc4563c23df64055e9b11",
            "name": "John Doe",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Britney_Spears_2013_%28Straighten_Crop%29.jpg/440px-Britney_Spears_2013_%28Straighten_Crop%29.jpg",
            "descr": "fans wonder whether Britney Spears ever mentioned her troubling experiences with fame in her  beloved starlet who cries, cries behind closed doors. Or maybe they say I'm Not A Girl, Not ge ballad in which Spears acknowledges through song that life doesn't always go my way.",
            "rests": [ rest1, rest2, rest3 ]
        }
      ]
   }
 */

/**
 * @api {get} /chefs/:id Get a chef
 * @apiName GetChef
 * @apiGroup Chefs
 *
 * @apiParam {String{50}} id Chefs unique ID.
 *
 * @apiSuccess {Boolean}  success success status.
 * @apiSuccess {String}   msg messsage from api.
 * @apiSuccess {Object}   data (name, image, descr, rests)
 *
 * @apiSuccessExample Success-Response:
 * {
   "success": true,
   "msg": "Show chef.",
   "data": {
      "_id": "616bc6433c23df64055e9b11",
      "name": "Robert De Niro",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Britney_Spears_2013_%28Straighten_Crop%29.jpg/440px-Britney_Spears_2013_%28Straighten_Crop%29.jpg",
      "descr": "fans wonder whether Britney Spears ever mentioned her troubling experiences with fame in her  beloved starlet who cries, cries behind closed doors. Or maybe they say I'm Not A Girl, Not ge ballad in which Spears acknowledges through song that life doesn't always go my way.",
      "rests": [ rest1, rest2, ...]
      }
   }
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "success": false,
 *   "msg": "Chef not found."
 * }
 */

/**
 * @api {post} /chefs Add a chef
 * @apiName AddChef
 * @apiGroup Chefs
 *
 * @apiBody {String{50}} name            Mandatory Chef's Name.
 * @apiBody {String{500}} image          Image Url.
 * @apiBody {String{500}} descr          Description.
 * @apiBody {Array} rests                Empty Array.
 * 
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} msg Chef created.
 * @apiSuccess {Object} data {name, image, descr, rests, _id, __v}
 *
 * @apiSuccessExample Success-Response:
 * {
    "success": true,
    "msg": "Chef created.",
    "data": {
        "name": "Robrt De Niro",
        "image": "",
        "descr": "fans wonder whether Britney Spears ever mentioned her troubling experiences with fame in her  beloved starlet who cries, cries behind closed doors. Or maybe they say I'm Not A Girl, Not ge ballad in which Spears acknowledges through song that life doesn't always go my way.",
        "rests": [],
        "_id": "616c143547980cc18b288798",
        "__v": 0
    }
  }
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "success": false,
 *   "msg": "Chef not created."
 * }
 */

/**
 * @api {put} /chefs/:id Update a chef
 * @apiName UpdateChef
 * @apiGroup Chefs
 *
 * @apiParam {String} id Chefs unique ID.
 * 
 * @apiBody {String{50}} name            Mandatory Chef's Name.
 * @apiBody {String{500}} image          Image Url.
 * @apiBody {String{500}} descr          Description.
 * @apiBody {Array} rests                Empty Array.
 *
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} msg Chef updated.
 * @apiSuccess {Object} data {name, image, descr, rests, _id, __v}
 *
 * @apiSuccessExample Success-Response:
 * {
    "success": true,
    "msg": "Chef updated.",
    "data": {
        "name": "Robrt De Niro",
        "image": "",
        "descr": "fans wonder whether Britney Spears ever mentioned her troubling experiences with fame in her  beloved starlet who cries, cries behind closed doors. Or maybe they say I'm Not A Girl, Not ge ballad in which Spears acknowledges through song that life doesn't always go my way.",
        "rests": [],
        "_id": "616c143547980cc18b288798",
        "__v": 0
    }
  }
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "success": false,
 *   "msg": "Chef not updated."
 * }
 */

/**
 * @api {delete} /chefs/:id Delete a chef
 * @apiName DeleteChef
 * @apiGroup Chefs
 *
 * @apiParam {String} id Chefs unique ID.
 * 
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} msg Chef deleted.
 * @apiSuccess {Object} data {name, image, descr, rests, _id, __v}
 *
 * @apiSuccessExample Success-Response:
 * {
    "success": true,
    "msg": "Chef deleted.",
    "data": {
        "name": "Robrt De Niro",
        "image": "",
        "descr": "fans wonder whether Britney Spears ever mentioned her troubling experiences with fame in her  beloved starlet who cries, cries behind closed doors. Or maybe they say I'm Not A Girl, Not ge ballad in which Spears acknowledges through song that life doesn't always go my way.",
        "rests": [],
        "_id": "616c143547980cc18b288798",
        "__v": 0
    }
  }
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "success": false,
 *   "msg": "Chef not deleted."
 * }
 */

export default ChefCtrl;
