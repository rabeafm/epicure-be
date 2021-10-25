import BaseCtrl from './basectrl';
import RestCRUD from '../services/rests';
import RestSchema from '../models/Rest';

class RestCtrl extends BaseCtrl {
  // Define Handler
  handler = new RestCRUD(RestSchema);

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

/**
 *  @api {get} /rests  Get all rests
 *  @apiName GetAllRests
 *  @apiGroup Rests
 * 
 *  @apiSuccess {Boolean}  success success status.
 *  @apiSuccess {String}   msg messsage from api.
 *  @apiSuccess {Number}   count length of array.
 *  @apiSuccess {Array}    data array of resturants.
 *
 *  @apiSuccessExample Success-Response:
 *  {
    "success": true,
    "msg": "Show all resturants.",
    "count": 2,
    "data": [
        {
            "_id": "616c23da40421a956365e6ad",
            "name": "Italian Pizza",
            "image": "https://img.jamieoliver.com/home/wp-content/uploads/2021/03/familyfood_lead.jpg",
            "chef": "616c190940421a956365e69f",
            "dishes": [ dish1, dish2 ],
            "__v": 0
        },
        {
            "_id": "616c23df40421a956365e6b0",
            "name": "Italian oven",
            "image": "https://img.jamieoliver.com/home/wp-content/uploads/2021/03/familyfood_lead.jpg",
            "chef": "616c190940421a956365e69f",
            "dishes": [],
            "__v": 0
        }
    ]
}
 */

/**
 * @api {get} /rests/:id Get a rest
 * @apiName GetRest
 * @apiGroup Rests
 *
 * @apiParam {String{50}} id Resturant's unique ID.
 *
 * @apiSuccess {Boolean}  success success status.
 * @apiSuccess {String}   msg messsage from api.
 * @apiSuccess {Object}   data (name, image, chef, dishes)
 *
 * @apiSuccessExample Success-Response:
 * {
    "success": true,
    "msg": "Show resturant.",
    "data": {
        "_id": "616c23da40421a956365e6ad",
        "name": "Italian Pizza",
        "image": "https://img.jamieoliver.com/home/wp-content/uploads/2021/03/familyfood_lead.jpg",
        "chef": "616c190940421a956365e69f",
        "dishes": [ dish1, dish2 ],
        "__v": 0
    }
}
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 400 Not Found
 * {
 *   "success": false,
 *   "msg": "Resturant not found."
 * }
 */

/**
 * @api {post} /rests Add a rest
 * @apiName AddRest
 * @apiGroup Rests
 *
 * @apiBody {String{50}} name            Mandatory Resturant's Name.
 * @apiBody {String{500}} image          Image Url.
 * @apiBody {String{50}} chef            Chef Id.
 * @apiBody {Array} rests                Empty Array.
 * 
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} msg Resturant created.
 * @apiSuccess {Object} data {name, image, descr, rests, _id, __v}
 *
 * @apiSuccessExample Success-Response:
 * {
    "success": true,
    "msg": "Resturant created.",
    "data": {
        "name": "Italian furnace",
        "image": "https://img.jamieoliver.com/home/wp-content/uploads/2021/03/familyfood_lead.jpg",
        "chef": "616c190940421a956365e69f",
        "dishes": [],
        "_id": "616c293840421a956365e6c6",
        "__v": 0
    }
}
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "success": false,
 *   "msg": "Resturant not created."
 * }
 */

/**
 * @api {put} /rests/:id Update a rest
 * @apiName UpdateRest
 * @apiGroup Rests
 *
 * @apiParam {String{50}} id Resturant's unique ID.
 * 
 * @apiBody {String{50}} name            Mandatory Resturant's Name.
 * @apiBody {String{500}} image          Image Url.
 * @apiBody {String{50}} chef            Chef Id.
 * @apiBody {Array} rests                Empty Array.
 * 
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} msg Resturant updated.
 * @apiSuccess {Object} data {name, image, descr, rests, _id, __v}
 *
 * @apiSuccessExample Success-Response:
 * {
    "success": true,
    "msg": "Resturant updated.",
    "data": {
        "_id": "616c293840421a956365e6c6",
        "name": "Italian Furnace",
        "image": "https://img.jamieoliver.com/home/wp-content/uploads/2021/03/familyfood_lead.jpg",
        "chef": "616c190940421a956365e69f",
        "dishes": [],
        "__v": 0
    }
}
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "success": false,
 *   "msg": "Resturant not updated."
 * }
 */

/**
 * @api {delete} /rests/:id Delete a rest
 * @apiName DeleteRest
 * @apiGroup Rests
 *
 * @apiParam {String{50}} id Resturant's unique ID.
 * 
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} msg Resturant deleted.
 * @apiSuccess {Object} data {name, image, descr, rests, _id, __v}
 *
 * @apiSuccessExample Success-Response:
 * {
    "success": true,
    "msg": "Resturant deleted",
    "data": {
        "_id": "616c293840421a956365e6c6",
        "name": "Italian Furnace",
        "image": "https://img.jamieoliver.com/home/wp-content/uploads/2021/03/familyfood_lead.jpg",
        "chef": "616c190940421a956365e69f",
        "dishes": [],
        "__v": 0
    }
}
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "success": false,
 *   "msg": "Resturant not deleted."
 * }
 */

export default RestCtrl;
