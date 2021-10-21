import { Auth } from "../models/auth";

const generateToken = () => {
  let token = "";
  for (let i = 0; i < 6; i++) {
    token += Math.floor(Math.random() * 10).toString()
  }

  return token;
}

const generateAuthToken = async () => {

  const tokenExists = async () => {
    return Auth.findOne({ token: newToken })
      .then(auth => {
        if (auth) return true
        else return false
      })
      .catch(err => {
        return false;
      })
  }

  // generate newToken
  let newToken: string;
  newToken = generateToken();

  // while newToken is in the database
  while (true == await tokenExists()) {
    // generate a newToken
    newToken = generateToken();
  }
  
  // else
  // return newToken
  return newToken;

}

export { generateToken, generateAuthToken }