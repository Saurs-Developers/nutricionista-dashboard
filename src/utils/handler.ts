import { StatusCodes } from "http-status-codes"
import { NextResponse } from "next/server"

import { HttpMethod } from "@/@types/http-codes"

export const withHttpMethods = (
  handlers: Partial<
    Record<HttpMethod, (req: Request) => Promise<unknown> | undefined>
  >,
) => {
  return async (req: Request) => {
    const method = req.method as HttpMethod | undefined

    if (!method) {
      return NextResponse.json(
        {
          error: "No HTTP method specified",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          status: StatusCodes.BAD_REQUEST,
        },
      )
    }

    const handler = handlers[method]
    if (!handler) {
      return NextResponse.json(
        {
          error: "No handler specified for HTTP method",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          status: StatusCodes.BAD_REQUEST,
        },
      )
    }

    return handler(req)
  }
}
