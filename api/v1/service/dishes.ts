import { Request } from 'express';
import Dish from '../../../models/Dish.js';

const dishHandler = {
  getAll: async () => await Dish.find(), // Get all dishes
  get: async ({ params: { id } }: Request) => await Dish.findById(id), // Get dish by id
  add: async ({ body }: Request) => await Dish.create(body), // Add dish
  set: async ({ params: { id }, body }: Request) =>
    await Dish.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    }), // Edit dish by id
  delete: async ({ params: { id } }: Request) => await Dish.findByIdAndDelete(id), // Delete dish by id
};
export default dishHandler;
