import { NextApiRequest, NextApiResponse } from "next";
import { Auth, AuthModel } from "../../../../models/auth";
import { connectDB } from "../../../../models/connect";
import { method } from "../../../../middlewares/request-method";
import { bodyParseUrlEncoded } from "../../../../middlewares/parse-body";
import { badRequest, serverError, success } from "../../../../middlewares/response-helpers";
import { User } from "../../../../models/users";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  method.post(req, res, async () => {
    try {
      bodyParseUrlEncoded();

      // connect to the db
      connectDB();

      // verify if user exists
      let data = await Auth.findOne({ email: req.body.email });
      if (data) return badRequest(res, 'User already exists')

      // initiate new instance of the auth model
      const auth = new Auth();
      auth.email = req.body.email;
      auth.is
      auth.hashPassword(req.body.password);

      // save auth
      auth.save()
        .then(auth => {

          // create a new user
          let user = new User({ email: req.body.email });

          return user.save()
            .then(user => {
              return success(res, 'User registration successful.');
            }).catch(err => {
              return badRequest(res, err.message)
            })
        })
        .catch(err => {
          return badRequest(res, err.message)
        });

    } catch (err) {
      console.log(err.message);
      return serverError(res, err.message)
    }
  });

  method.end(res, true);
}
