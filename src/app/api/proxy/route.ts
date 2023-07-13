import axios from "axios"
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"

import { HttpMethod } from "@/@types/http-methods"
import { nextAuthConfig } from "@/lib/auth"

const routeHandler = async (req: NextRequest) => {
  const method = req.method as HttpMethod

  const apiUri = req.headers.get("x-api-uri")
  const session = await getServerSession(nextAuthConfig)

  try {
    if (method === "GET" || method === "DELETE") {
      const response = await axios.request({
        url: process.env.NEXT_PUBLIC_BASE_URL! + apiUri,
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + session!.user.access_token,
        },
      })

      const data = await response.data

      return NextResponse.json(data)
    } else {
      const request = await req.json()

      // console.log(JSON.stringify(request))

      const response = await axios.request({
        url: process.env.NEXT_PUBLIC_BASE_URL! + apiUri,
        method: method,
        data: request,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + session!.user.access_token,
        },
      })

      // console.log({
      //   url: process.env.NEXT_PUBLIC_BASE_URL! + apiUri,
      //   method: method,
      //   data: request.data,
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: "Bearer " + session!.user.access_token,
      //   },
      // })

      if (response.status === 204) return NextResponse.json(response.data)

      return NextResponse.json(
        { message: response.data.message },
        { status: response.data.status },
      )
    }
  } catch (error) {
    console.log(error)
    return NextResponse.error()
  }
}

export {
  routeHandler as GET,
  routeHandler as POST,
  routeHandler as PATCH,
  routeHandler as PUT,
  routeHandler as DELETE,
}
