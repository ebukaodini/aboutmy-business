import { models, model, Schema } from "mongoose";

interface IUser {
  firstname?: string,
  lastname?: string,
  email: string,
  country_code?: string,
  telephone?: string,
  bio?: string,
  avatar?: string
}

const schema = new Schema<IUser>({
  firstname: {
    type: String,
    minlength: [2, 'Firstname must be greater than 2 characters']
  },
  lastname: {
    type: String,
    minlength: [2, 'Lastname must be greater than 2 characters']
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  country_code: {
    type: String
  },
  telephone: {
    type: String,
    minlength: [2, 'Telephone number must be greater than 2 characters']
  },
  bio: {
    type: String
  },
  avatar: {
    type: String
  }
})

const User = models.User || model<IUser>("User", schema);

export { User }
export type { IUser }