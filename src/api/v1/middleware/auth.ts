import jwt from 'jsonwebtoken';
import UserSchema from '../models/User';

declare var process: {
  env: {
    JWT_SECRET: string;
    NODE_ENV: string;
  };
};

export default async function protect(req: any, res: any, next: any) {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.token) {
      token = req.cookies.token;
    }

  // Make sure Token Exists
  if (!token) {
    // not authorized
    return res
      .status(401)
      .json({ success: false, msg: 'Not Authorized to access this route' });
  }
  try {
    //verify token
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await UserSchema.findById(decoded.id);
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ success: false, msg: 'Not Authorized to access this route' });
  }
}
