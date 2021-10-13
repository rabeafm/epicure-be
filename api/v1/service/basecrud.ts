import { Request } from 'express';

class BaseCRUD {
  t: any;

  constructor(model: any) {
    this.t = model;
  }

  async getAll<t>() {
    // Get all chefs
    await this.t.find();
  }

  async get<t>({ params: { id } }: Request) {
    // Get chef by id
    return await this.t.findById(id);
  }

  async add<t>({ body }: Request) {
    // Add chef
    return await this.t.create(body);
  }

  async set<t>({ params: { id }, body }: Request) {
    // Edit chef by id
    return await this.t.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
  }

  async delete<t>({ params: { id } }: Request) {
    return await this.t.findByIdAndDelete(id); // Delete chef by id
  }
}

export default BaseCRUD;
/*
Add some data for all the content types.
Fix mongo queries
Create on the server a Search call that searches for all the content types. After creating it, we need to use this call in the Search input on the Frontend.
Search for an ingredient that appears on many dishes: if we click on one of the ingredients of a dish, we need to show all the dishes containing that ingredient.
*/
