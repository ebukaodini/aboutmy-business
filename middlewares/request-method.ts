import { NextApiRequest, NextApiResponse } from "next";

let allowedMethods: string[] = [];

// this was put in place to handle asynchronous handlers
let routed: boolean = false;

interface methodInterface {
  get(req: NextApiRequest, res: NextApiResponse, handler: Function): unknown,
  post(req: NextApiRequest, res: NextApiResponse, handler: Function): unknown,
  put(req: NextApiRequest, res: NextApiResponse, handler: Function): unknown,
  patch(req: NextApiRequest, res: NextApiResponse, handler: Function): unknown,
  delete(req: NextApiRequest, res: NextApiResponse, handler: Function): unknown,
  options(req: NextApiRequest, res: NextApiResponse, handler: Function): unknown,
  end(res: NextApiResponse, showAllowedMethods?: boolean)
}

const method: methodInterface = {

  get: (req: NextApiRequest, res: NextApiResponse, handler: Function) => {

    allowedMethods.push("GET")
    if (req.method !== 'GET') return;

    routed = true;
    handler(req, res);
  },

  post: (req: NextApiRequest, res: NextApiResponse, handler: Function) => {

    allowedMethods.push("POST")
    if (req.method !== 'POST') return;

    routed = true;
    handler(req, res);
  },

  put: (req: NextApiRequest, res: NextApiResponse, handler: Function) => {

    allowedMethods.push("PUT")
    if (req.method !== 'PUT') return;

    routed = true;

    handler(req, res);
  },

  patch: (req: NextApiRequest, res: NextApiResponse, handler: Function) => {

    allowedMethods.push("PATCH")
    if (req.method !== 'PATCH') return;

    routed = true;
    handler(req, res);
  },

  delete: (req: NextApiRequest, res: NextApiResponse, handler: Function) => {

    allowedMethods.push("DELETE")
    if (req.method !== 'DELETE') return;

    routed = true;
    handler(req, res);
  },

  options: (req: NextApiRequest, res: NextApiResponse, handler: Function) => {

    allowedMethods.push("OPTIONS")
    if (req.method !== 'OPTIONS') return;

    routed = true;
    handler(req, res);
  },

  end: (res: NextApiResponse, showAllowedMethods?: boolean) => {

    if (routed == true) return;

    let methods = allowedMethods.join(', ');
    allowedMethods = []; routed = false;

    res.status(405).send({
      message: 'Method Not Allowed.' +
        (
          (showAllowedMethods ?? false) == true
            ? ` Only ${methods} method(s) are allowed.`
            : ''
        )
    });
  }

}

export { method }