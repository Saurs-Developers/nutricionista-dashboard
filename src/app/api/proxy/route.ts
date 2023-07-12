import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

import { HttpMethod } from "@/@types/http-methods"
import { delay } from "@/utils/api"

const routeHandler = async (req: NextRequest) => {
  const method = req.method as HttpMethod
  const maxRetries = 3
  let retryCount = 0

  const apiUri = req.headers.get("x-api-uri")
  const authorization = req.headers.get("Authorization")

  while (retryCount < maxRetries) {
    try {
      if (method === "GET") {
        const response = await axios.request({
          url: process.env.NEXT_PUBLIC_BASE_URL! + apiUri,
          method: method,
          headers: {
            "Content-Type": "application/json",
            Authorization: authorization,
          },
        })

        const data = await response.data

        return NextResponse.json(data)
      }

      const request = await req.json()

      // console.log(request)

      const response = await axios.request({
        url: process.env.NEXT_PUBLIC_BASE_URL! + apiUri,
        method: method,
        data: request,
        headers: {
          "Content-Type": "application/json",
          Authorization: authorization,
        },
      })

      // console.log({
      //   url: process.env.NEXT_PUBLIC_BASE_URL! + apiUri,
      //   method: method,
      //   data: request.data,
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: authorization,
      //   },
      // })

      const data = await response.data

      return NextResponse.json(data)
    } catch (error) {
      console.error("API request failed:", error)
      retryCount++
      await delay(1000)
    }
  }
}

export {
  routeHandler as DELETE,
  routeHandler as GET,
  routeHandler as PATCH,
  routeHandler as POST,
  routeHandler as PUT,
}
