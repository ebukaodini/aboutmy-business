import jwt, { JwtPayload } from 'jsonwebtoken';
import { IAuth } from '../models/auth';
import fs from 'fs';
import { NextApiResponse } from 'next';
import { badRequest } from './response-helpers';

interface jwtAuth {
  authenticated?: boolean,
  authError?: jwt.VerifyErrors,
  authPayload?: IAuth,
  tokenize(auth: IAuth): string,
  verify(token: string): any
}

const jwtAuth: jwtAuth = {

  tokenize: (auth: IAuth) => {

    var key = fs.readFileSync('secret.pem');

    return jwt.sign({ data: auth }, key, {
      algorithm: 'RS256',
      expiresIn: '1h' //* alternative to exp
    });

  },

  verify: (token: string) => {

    var key = fs.readFileSync('secret.pem');

    jwt.verify(token, key, {
      algorithms: ['RS256']
    }, (err, payload) => {
      if (err) {
        jwtAuth.authenticated = false;
        jwtAuth.authError = err;
      }
      else {
        jwtAuth.authenticated = true;
        jwtAuth.authPayload = payload.data;
      }
    })

  }

}

export { jwtAuth }