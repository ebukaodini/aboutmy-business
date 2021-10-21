import { NextApiRequest, NextApiResponse } from "next";
import { bodyParseUrlEncoded } from "../../../../middlewares/parse-body";
import { method } from "../../../../middlewares/request-method";
import { badRequest, serverError, success } from "../../../../middlewares/response-helpers";
import { Auth, IAuth } from "../../../../models/auth";
import { connectDB } from "../../../../models/connect";
import { User } from "../../../../models/users";
import { generateHash } from "../../../../utils/generate-hash";
import { generateAuthToken } from "../../../../utils/generate-token";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  method.post(req, res, async () => {
    try {

      // parse the req body
      // generate unique token for user
      // generate expiration date for token
      // find the user email in auth
      // set auth token for the user
      // return success if:
      // auth token was set && auth token was sent to user's mail
      
      bodyParseUrlEncoded();

      await connectDB();

      let authToken = await generateAuthToken();
      let tokenExpiresBy = new Date();
      tokenExpiresBy.setUTCMinutes(tokenExpiresBy.getMinutes() + 5);
      
      Auth.findOneAndUpdate(
        { email: req.body.email },
        { token: authToken, tokenExpiresBy: tokenExpiresBy },
        { new: true } //* to return an updated document
      )
        .then((auth: IAuth) => {
          //TODO: send mail to user email

          return success(res, `Token sent to ${auth.email}. Token expires in 5 minutes.` + auth.token,
            { reset_password_hash: generateHash(auth.token) })
        })
        .catch(err => {
          return badRequest(res, 'User does not exist.')
        })

    } catch (err) {
      console.log(err.message)
      return serverError(err, err.message);
    }
  })

  method.end(res, true);
}