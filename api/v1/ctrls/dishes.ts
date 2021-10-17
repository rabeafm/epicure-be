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

/**
 *  @api {get} /dishes  Get all dishes
 *  @apiName GetAllDishes
 *  @apiGroup Dishes
 * 
 *  @apiSuccess {Boolean}  success success status.
 *  @apiSuccess {String}   msg messsage from api.
 *  @apiSuccess {Number}   count length of array.
 *  @apiSuccess {Array}    data array of dishes.
 *
 *  @apiSuccessExample Success-Response:
 *  {
    "success": true,
    "msg": "Show all dishes.",
    "count": 2,
    "data": [
        {
            "_id": "616c240340421a956365e6b4",
            "name": "oven lime",
            "price": 25,
            "ingredients": [
                "chicpeas",
                "garlic"
            ],
            "tags": [
                "spicey",
                "onions"
            ],
            "resturant": "616c23da40421a956365e6ad",
            "__v": 0
        },
        {
            "_id": "616c240940421a956365e6b7",
            "name": "oven potatos",
            "price": 25,
            "ingredients": [
                "chicpeas",
                "garlic"
            ],
            "tags": [
                "spicey",
                "onions"
            ],
            "resturant": "616c23da40421a956365e6ad",
            "__v": 0
        }
    ]
}
 */

/**
 * @api {get} /dishes/:id Get a dish
 * @apiName GetDish
 * @apiGroup Dishes
 *
 * @apiParam {String{50}} id Dish's unique ID.
 *
 * @apiSuccess {Boolean}  success success status.
 * @apiSuccess {String}   msg messsage from api.
 * @apiSuccess {Object}   data (name, price, ingredients, tags, resturant)
 *
 * @apiSuccessExample Success-Response:
 * {
    "success": true,
    "msg": "Show Dish.",
    "data": {
        "_id": "616c240340421a956365e6b4",
        "name": "oven lime",
        "price": 25,
        "ingredients": [
            "chicpeas",
            "garlic"
        ],
        "tags": [
            "spicey",
            "onions"
        ],
        "resturant": "616c23da40421a956365e6ad",
        "__v": 0
    }
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "success": false,
 *   "msg": "Dish not found."
 * }
 */

/**
 * @api {post} /dishes Add a dish
 * @apiName AddDish
 * @apiGroup Dishes
 *
 * @apiBody {String{50}} name            Mandatory Dish's Name.
 * @apiBody {Number} price               Dish price.
 * @apiBody {Array} ingredients          Dish's ingredients.
 * @apiBody {Array} tags                 Dish's tags.
 * @apiBody {String{50}} resturant       Resturant Id.
 * 
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} msg Dish created.
 * @apiSuccess {Object} data {name, price, ingredients, tags, resturant, _id, __v}
 *
 * @apiSuccessExample Success-Response:
 * {
    "success": true,
    "msg": "Dish created.",
    "data": {
        "name": "oven tomatoes",
        "price": 25,
        "ingredients": [
            "chicpeas",
            "garlic"
        ],
        "tags": [
            "spicey",
            "onions"
        ],
        "resturant": "616c23da40421a956365e6ad",
        "_id": "616c25e140421a956365e6bc",
        "__v": 0
    }
}
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "success": false,
 *   "msg": "Dish not created."
 * }
 */

/**
 * @api {put} /dishes/:id Update a dish
 * @apiName UpdateDish
 * @apiGroup Dishes
 *
 * @apiParam {String} id Dish's unique ID.
 * 
 * @apiBody {String{50}} name            Mandatory Dish's Name.
 * @apiBody {Number} price               Dish price.
 * @apiBody {Array} ingredients          Dish's ingredients.
 * @apiBody {Array} tags                 Dish's tags.
 * @apiBody {String{50}} resturant       Resturant Id.
 *
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} msg Dish updated.
 * @apiSuccess {Object} data {name, price, ingredients, tags, resturant, _id, __v}
 *
 * @apiSuccessExample Success-Response:
 * {
    "success": true,
    "msg": "Dish updated.",
    "data": {
        "_id": "616c25e140421a956365e6bc",
        "name": "oven tomatos",
        "price": 25,
        "ingredients": [
            "chicpeas",
            "garlic"
        ],
        "tags": [
            "spicey",
            "onions"
        ],
        "resturant": "616c23da40421a956365e6ad",
        "__v": 0
    }
}
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "success": false,
 *   "msg": "Dish not updated."
 * }
 */

/**
 * @api {delete} /chefs/:id Delete a dish
 * @apiName DeleteDish
 * @apiGroup Dishes
 *
 * @apiParam {String} id Dish's unique ID.
 * 
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} msg Dish deleted.
 * @apiSuccess {Object} data {name, price, ingredients, tags, resturant, _id, __v}
 *
 * @apiSuccessExample Success-Response:
 * {
    "success": true,
    "msg": "Dish deleted",
    "data": {
        "_id": "616c25e140421a956365e6bc",
        "name": "oven tomatos",
        "price": 25,
        "ingredients": [
            "chicpeas",
            "garlic"
        ],
        "tags": [
            "spicey",
            "onions"
        ],
        "resturant": "616c23da40421a956365e6ad",
        "__v": 0
    }
}
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "success": false,
 *   "msg": "Dish not deleted."
 * }
 */

export default DishCtrl;
