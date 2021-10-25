import { Request, Response, NextFunction } from 'express';
import BaseCtrl from './basectrl';
import AuthCRUD from '../services/auth';
import UserSchema from '../models/User';
import protect from '../middleware/auth';

declare var process: {
  env: {
    JWT_COOKIE_EXPIRE: number;
    NODE_ENV: string;
  };
};

class AuthCtrl extends BaseCtrl {
  // Define Handler
  handler = new AuthCRUD(UserSchema);

  protected initializeRoutes() {
    this.router.get('/me', protect, this.getMe.bind(this));
    this.router.post('/login', this.login.bind(this));
    this.router.post('/register', this.register.bind(this));
  }

  // Define Messages
  protected messages = {
    getall: { success: `Show all users.`, failure: `No users in database.` }, // @access  Public
    get: { success: `Show chef.`, failure: `Chef not found.` }, // @access  Public
    add: { success: `User created.`, failure: `User not Created.` }, // @access  Private
    getMe: { success: `Get Me.`, failure: `Didnt get me.` }, // @access  Private
    login: { success: `Logged in.`, failure: `Invalid Credentials.` }, // @access  Private
    register: { success: `User created.`, failure: `User not Created.` }, // @access  Private
    update: { success: `Chef updated.`, failure: `Chef not updated.` }, // @access  Private
    delete: { success: 'Chef deleted', failure: 'Chef not Deleted' }, // @access  Private
  };

  /**
 * @api {post} /register Register a user
 * @apiName Register User
 * @apiGroup Users
 *
 * @apiBody {String{50}} name            Mandatory user name.
 * @apiBody {String{100}} email          Mandatory email address.
 * @apiBody {String{20}} password        Mandatory user name.
 * @apiBody {String{10}} role            Description.
 * 
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} msg User created.
 * @apiSuccess {Object} data (name, email, role, _id), token
 *
 * @apiSuccessExample Success-Response:
 * {
    "success": true,
    "msg": "User created.",
    "data": {
        "user": {
            "name": "adin",
            "email": "raaf@moveo.co.il",
            "role": "admin",
            "_id": "616d37b2ee7a149d9c80cad7",
            "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmQzN2IyZWU3YTE0OWQ5YzgwY2FkNyIsImlhdCI6MTYzNDU0NzYzNCwiZXhwIjoxNjM0NzIwNDM0fQ.cbvvgARk7zR9_jlND15_PQa7DCZy_cb2QjoZCDWNOp8"
    }
}
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "success": false,
 *   "msg": "User not created."
 * }
 */
  public async register(req: Request, res: Response) {
    return await this.cookieResponder(
      this.handler.add.bind(this.handler),
      this.messages.register.success,
      this.messages.register.failure,
      req,
      res
    );
  }

  /**
 * @api {post} /register Register a user
 * @apiName Register User
 * @apiGroup Users
 *
 * @apiBody {String{50}} name            Mandatory user name.
 * @apiBody {String{100}} email          Mandatory email address.
 * @apiBody {String{20}} password        Mandatory user name.
 * @apiBody {String{10}} role            Description.
 * 
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} msg User created.
 * @apiSuccess {Object} data (name, email, role, _id), token
 *
 * @apiSuccessExample Success-Response:
 * {
    "success": true,
    "msg": "User created.",
    "data": {
        "user": {
            "name": "adin",
            "email": "raaf@moveo.co.il",
            "role": "admin",
            "_id": "616d37b2ee7a149d9c80cad7",
            "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmQzN2IyZWU3YTE0OWQ5YzgwY2FkNyIsImlhdCI6MTYzNDU0NzYzNCwiZXhwIjoxNjM0NzIwNDM0fQ.cbvvgARk7zR9_jlND15_PQa7DCZy_cb2QjoZCDWNOp8"
    }
}
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *   "success": false,
 *   "msg": "User not created."
 * }
 */
  public async login(req: Request, res: Response) {
    return await this.cookieResponder(
      this.handler.login.bind(this.handler),
      this.messages.login.success,
      this.messages.login.failure,
      req,
      res
    );
  }

  public async getMe(req: Request, res: Response, next: NextFunction) {
    return await this.responder(
      this.handler.getMe.bind(this.handler),
      this.messages.getMe.success,
      this.messages.getMe.failure,
      req,
      res,
      next
    );
  }

  public async cookieResponder(
    handler: Function,
    successmsg: string,
    failuremsg: string,
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const data = await handler(req);
      if (!data) {
        res.status(400).json({ success: false, msg: failuremsg });
      } else {
        // Get Token from model, create cookie and send response
        const options = {
          expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 3600 * 1000
          ),
          httpOnly: true,
          secure: false,
        };
        if (process.env.NODE_ENV === 'production') {
          options.secure = true;
        }

        res.status(200).json({ success: true, msg: successmsg, data: data });
      }
    } catch (err: unknown) {
      res.status(400).json({ success: false, msg: err as Error });
    }
  }
}
export default AuthCtrl;
