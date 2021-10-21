import { NextApiRequest, NextApiResponse } from "next";
import { jwtAuth } from "../../../../middlewares/jwt-auth";
import { bodyParseUrlEncoded } from "../../../../middlewares/parse-body";
import { method } from "../../../../middlewares/request-method";
import { badRequest, serverError, success } from "../../../../middlewares/response-helpers";
import { connectDB } from "../../../../models/connect";
import { User } from "../../../../models/user";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  method.post(req, res, () => {
    try {

      // parse the req body
      // verify authentication
      // connect db
      // get the body data
      // find the user with auth email
      // update user data
      // return response

      bodyParseUrlEncoded()

      jwtAuth.verify(req.headers.authtoken.toString());
      if (!jwtAuth.authenticated)
        return badRequest(res, `Authentication Error: ${jwtAuth.authError.message}`)

      connectDB();

      // get user profile
      User.findOneAndUpdate({ email: jwtAuth.authPayload.email }, {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        country_code: req.body.country_code,
        telephone: req.body.telephone,
        bio: req.body.bio
      }, { new: true })
        .then(user => {
          return success(res, 'Profile updated successfully.', user);
        })
        .catch(_ => {
          return badRequest(res, 'Profile not updated.')
        })

    } catch (err) {
      console.log(err.message);
      return serverError(res, err.message);
    }
  })

  method.end(res, true)
}