import { NextApiRequest, NextApiResponse } from "next";
import { bodyParseUrlEncoded } from "../../../../middlewares/parse-body";
import { method } from "../../../../middlewares/request-method";
import { badRequest, serverError, success } from "../../../../middlewares/response-helpers";
import { Auth, IAuth } from "../../../../models/auth";
import { connectDB } from "../../../../models/connect";

export default function verifyToken(req: NextApiRequest, res: NextApiResponse) {

  method.post(req, res, () => {

    try {

      // steps:
      // parse the req body
      // connect db
      // get the email and token
      // confirm that the token is same for email
      // return token expired if now > tokenExpiresBy
      // else 
      // make auth active
      // return success response

      bodyParseUrlEncoded()

      connectDB()

      Auth.findOne({ email: req.body.email, token: req.body.token })
        .then((auth: IAuth) => {
          if (Date.now() > Date.parse(auth.tokenExpiresBy))
            return badRequest(res, 'Token already expired.')

          Auth.findOneAndUpdate({ email: auth.email }, { isActive: true })
            .then(activeAuth => {
              return success(res, "Token verified. Account is activated.")
            })
            .catch(err => {
              return badRequest(res, "Account could not be activated. Contact support.")
            })
        })
        .catch(err => {
          return badRequest(res, "Token not verified.")
        })

    } catch (err) {
      console.log(err.message)
      return serverError(res, err.message)
    }

  });

  method.end(res, true);
}