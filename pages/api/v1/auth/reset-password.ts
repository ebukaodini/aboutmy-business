import { NextApiRequest, NextApiResponse } from "next";
import { bodyParseUrlEncoded } from "../../../../middlewares/parse-body";
import { method } from "../../../../middlewares/request-method";
import { badRequest, serverError, success } from "../../../../middlewares/response-helpers";
import { Auth, IAuth } from "../../../../models/auth";
import { connectDB } from "../../../../models/connect";
import { generateHash } from "../../../../utils/generate-hash";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  method.post(req, res, () => {
    try {
      // steps:
      // parse the req body
      // connect db
      // get the email, the reset password hash and the new password
      // find the account with the email
      // validate the reset password hash
      // update the password hash for the account
      // return success

      bodyParseUrlEncoded();

      connectDB()

      if (!req.body.reset_password_hash)
        return badRequest(res, 'Reset password hash not sent');

      return Auth.findOne({ email: req.body.email })
        .then((auth: IAuth) => {
          if (req.body.reset_password_hash != generateHash(auth.token))
            return badRequest(res, 'Invalid reset password hash.')

          let updates: object = auth.hashPassword(req.body.password);
          return Auth.findOneAndUpdate({ email: req.body.email }, updates)
            .then(_ => {
              return success(res, 'Password is updated successfully.');
            })
            .catch(_ => {
              return badRequest(res, 'Password could not be updated. Please contact support.')
            })
        })
        .catch(_ => {
          badRequest(res, 'Account could not be found. Please contact support.')
        })

    } catch (err) {
      console.log(err.message)
      return serverError(res, err.message);
    }
  })

  method.end(res, true);
}