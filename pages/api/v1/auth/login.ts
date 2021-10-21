import { NextApiRequest, NextApiResponse } from "next";
import { jwtAuth } from "../../../../middlewares/jwt-auth";
import { bodyParseUrlEncoded } from "../../../../middlewares/parse-body";
import { method } from "../../../../middlewares/request-method";
import { success, serverError, badRequest } from "../../../../middlewares/response-helpers";
import { Auth, IAuth } from "../../../../models/auth";
import { connectDB } from "../../../../models/connect";
import { generateAuthToken } from "../../../../utils/generate-token";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  method.post(req, res, () => {
    try {
      bodyParseUrlEncoded();

      // connect db
      connectDB();

      // get the login body data
      return Auth.findOne({ email: req.body.email })
        .then(async (auth: IAuth) => {
          if (!auth) throw new Error('Invalid email / password.');

          if (auth.verifyPassword(req.body.password) == true) {

            if (auth.isActive == false) {

              // generate unique token for user
              let authToken = await generateAuthToken();
              // get expiration date
              let tokenExpiresBy = new Date();
              tokenExpiresBy.setUTCMinutes(tokenExpiresBy.getMinutes() + 5);

              return Auth.findOneAndUpdate({ email: auth.email }, { token: authToken, tokenExpiresBy: tokenExpiresBy })
                .then((newAuth: IAuth) => {
                  //TODO: send mail to user email
                  //! use authToken not newAuth.token
                  //! because it returns undefined for a user's first login

                  return badRequest(res, `Account is not activated. Activation token has been sent to ${newAuth.email}. Token expires in 5 minutes. ${newAuth.token}`)
                })
                .catch(err => {
                  return badRequest(res, `Account is not activated. Activation token could not be sent to ${auth.email}.`)
                })
            }

            // generate jwt token for user
            let token = jwtAuth.tokenize(auth);

            return success(res, 'Login successful', { token });

          } else {
            throw new Error('Invalid email / password.')
          }
        })
        .catch(err => {
          return badRequest(res, err.message)
        })

    } catch (err) {
      console.log(err.message);
      return serverError(res, err.message)
    }
  });

  method.end(res, true);

}