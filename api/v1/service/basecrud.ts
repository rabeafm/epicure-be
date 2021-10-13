import { Request } from 'express';

export default abstract class BaseCRUD {
  private model;

  constructor(mod: any) {
    this.model = mod;
  }

  public getAll = async () => await this.model.find();
  public get = async ({ params: { id } }: Request) =>
    await this.model.findById(id);
  public add = async ({ body }: Request) => await this.model.create(body);
  public set = async ({ params: { id }, body }: Request) =>
    await this.model.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
  public delete = async ({ params: { id } }: Request) =>
    await this.model.findByIdAndDelete(id);
}
