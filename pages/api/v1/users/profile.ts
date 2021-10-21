import { NextApiRequest, NextApiResponse } from "next";
import { jwtAuth } from "../../../../middlewares/jwt-auth";
import { method } from "../../../../middlewares/request-method";
import { badRequest, serverError, success } from "../../../../middlewares/response-helpers";
import { connectDB } from "../../../../models/connect";
import { User } from "../../../../models/users";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  method.get(req, res, () => {
    try {

      // middleware to authenticate user
      jwtAuth.verify(req.headers.authtoken.toString());
      if (!jwtAuth.authenticated)
        return badRequest(res, `Authentication Error: ${jwtAuth.authError.message}`)

      // connect db
      connectDB();

      // get user profile
      User.findOne({ email: jwtAuth.authPayload.email })
        .then(user => {
          return success(res, 'User Profile', user);
        })
        .catch(err => {
          return badRequest(res, 'User does not exist')
        })

    } catch (err) {
      console.log(err.message);
      return serverError(res, err.message);
    }
  })

  method.end(res, true)
}