import crypto from "crypto";

const generateHash = (data: string): string  => {

  let hashObj = crypto.createHash('sha256');
  hashObj.update(data);
  
  return hashObj.digest('hex');
}

export { generateHash }