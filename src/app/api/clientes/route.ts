import axios from "axios"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

import { HttpMethod } from "@/@types/http-methods"
import { parseJwt } from "@/lib/utils"
import { delay } from "@/utils/api"

// export async function GET(req: NextRequest) {
//   const cookieStore = cookies()
//   const url = new URL(req.url)

//   const page = url.searchParams.get("page")
//   const estado = url.searchParams.get("estado")
//   const nome = url.searchParams.get("nome")

//   const token = cookieStore.get("token")?.value
//   const userData = parseJwt(token)

//   const maxRetries = 3
//   let retryCount = 0

//   while (retryCount < maxRetries) {
//     try {
//       let apiUrl =
//         process.env.NEXT_PUBLIC_BASE_URL +
//         "/v1/clientes/profissionais/" +
//         userData.user_id +
//         "?page=" +
//         page +
//         "&size=6&orderBy=createdAt"

//       const res = await fetch(apiUrl, {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       })

//       const clientes = await res.json()

//       return NextResponse.json(clientes)
//     } catch (error) {
//       console.error("API request failed:", error)
//       retryCount++
//       await delay(500)
//     }
//   }

//   return NextResponse.json(
//     {
//       error: "API request failed after maximum retries",
//     },
//     { status: 400 },
//   )
// }

// export async function POST(req: Request) {
//   const cookieStore = cookies()

//   const request = await req.json()

//   const token = cookieStore.get("token")?.value

//   const maxRetries = 3
//   let retryCount = 0

//   while (retryCount < maxRetries) {
//     try {
//       let apiUrl = process.env.NEXT_PUBLIC_BASE_URL + "/v1/clientes"

//       const response = await axios.post(apiUrl, request.data, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + token,
//         },
//       })

//       const data = response.data

//       return NextResponse.json(data)
//     } catch (error) {
//       console.error("API request failed:", error)
//       retryCount++
//       await delay(500)
//     }
//   }

//   return NextResponse.json(
//     {
//       error: "API request failed after maximum retries",
//     },
//     { status: 400 },
//   )
// }

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
