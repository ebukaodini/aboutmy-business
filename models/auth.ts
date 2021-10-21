import crypto from "crypto";
import { model, Schema, models, Model } from "mongoose";

interface IAuth {
  email: string,
  hash: string,
  salt: string,
  token?: string,
  tokenExpiresBy?: any,
  isActive: boolean,
  hashPassword(password: string): any,
  verifyPassword(password: string): boolean
}

interface AuthModel extends Model<any> {
  emailExist(email: string): boolean,
  userExist(email: string): boolean
}

const authSchema = new Schema<IAuth>({
  email: {
    type: String,
    unique: true,
    required: true
  },
  hash: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  token: {
    type: String,
    maxlength: 6
  },
  tokenExpiresBy: {
    type: Date
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

authSchema.methods.hashPassword = function (password: string): any {
  // Creating a unique salt for a particular user
  this.salt = crypto.randomBytes(16).toString('hex');

  // Hashing user's salt and password with 1000 iterations, 64 length and sha512 digest
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);

  // optional return for updating password
  return { salt: this.salt, hash: this.hash }
}

authSchema.methods.verifyPassword = function (password: string): boolean {
  let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
  return this.hash === hash;
}

authSchema.statics.userExist = function (email: string) {
  this.findOne({ email: email }, (err, auth) => {
    if (err) throw err;
    if (!auth) {
      return false;
    } else {
      return true;
    }
  })
}

authSchema.static('emailExist', function emailExist(email: string) {
  this.findOne({ email: email }, (err, auth) => {
    if (err) throw err;
    if (!auth) {
      return false;
    } else {
      return true;
    }
  })
})

const Auth = models.Auth || model<IAuth>("Auth", authSchema);

export { Auth };
export type { AuthModel }
export type { IAuth }