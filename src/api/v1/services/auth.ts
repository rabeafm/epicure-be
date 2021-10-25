import { Request } from 'express';
import BaseCRUD from './basecrud';

class AuthCRUD extends BaseCRUD {
  /* For Modifications */

  public async add({ body: { name, email, password, role } }: Request) {
    const user = await this.model.create({ name, email, password, role });
    const token = user.getSignedJwtToken();
    user.password = undefined;
    return { user, token };
  }

  public async login({ body: { email, password } }: Request) {
    if (!email || !password) return;
    const user = await this.model.findOne({ email: email }).select('+password');
    if (!user) return;
    const isMatch = await user.matchPassword(password);
    if (!isMatch) return;
    const token = user.getSignedJwtToken();
    user.password = undefined;
    return { user, token };
  }

  public async getMe(req: any, res: any) {
    const user = await this.model.findById(req.user.id);
    return user;
  }
}

export default AuthCRUD;
