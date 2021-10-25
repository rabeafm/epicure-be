import { Request } from 'express';

class BaseCRUD {
  protected model;

  constructor(mod: any) {
    this.model = mod;
  }

  public async getAll() {
    return await this.model.find();
  }
  public async get({ params: { id } }: Request) {
    return await this.model.findById(id);
  }

  public async add({ body }: Request) {
    return await this.model.create(body);
  }

  public async set({ params: { id }, body }: Request) {
    return await this.model.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
  }

  public async delete({ params: { id } }: Request) {
    return await this.model.findByIdAndDelete(id);
  }
}

export default BaseCRUD;
