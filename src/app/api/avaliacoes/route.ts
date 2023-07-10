import axios from "axios"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

import { HttpMethod } from "@/@types/http-methods"
import { delay } from "@/utils/api"

const routeHandler = async (req: NextRequest) => {
  const method = req.method as HttpMethod
  const maxRetries = 3
  let retryCount = 0

  const apiUri = req.headers.get("x-api-uri")

  const cookieStore = cookies()
  const token = cookieStore.get("token")?.value

  while (retryCount < maxRetries) {
    try {
      if (method === "GET") {
        const response = await axios.request({
          url: process.env.NEXT_PUBLIC_BASE_URL! + apiUri,
          method: method,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })

        const data = await response.data

        return NextResponse.json(data)
      }

      const request = await req.json()

      const response = await axios.request({
        url: process.env.NEXT_PUBLIC_BASE_URL! + apiUri,
        method: method,
        data: request.data,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })

      const data = await response.data

      return NextResponse.json(data)
    } catch (error) {
      console.error("API request failed:", error)
      retryCount++
      await delay(500)
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
