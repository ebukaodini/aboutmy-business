import { NextApiResponse } from "next";

function isRequired() {
  throw new Error("Missing required field");
}

const serverError = (res: NextApiResponse, message: unknown = isRequired(), data?: unknown, statusCode?: number) => {
  res.status(statusCode ?? 500).json({
    status: false,
    message: message,
    data: data ?? {}
  })
}

const badRequest = (res: NextApiResponse, message: unknown = isRequired(), data?: unknown, statusCode?: number) => {
  res.status(statusCode ?? 400).json({
    status: false,
    message: message,
    data: data ?? {}
  })
}

const success = (res: NextApiResponse, message: unknown = isRequired(), data?: unknown, statusCode?: number) => {
  res.status(statusCode ?? 200).json({
    status: true,
    message: message,
    data: data ?? {}
  })
}

export { serverError, badRequest, success }