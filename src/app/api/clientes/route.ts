import axios from "axios"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

import { parseJwt } from "@/lib/utils"

export async function GET(req: NextRequest) {
  const cookieStore = cookies()
  const url = new URL(req.url)

  const page = url.searchParams.get("page")
  const estado = url.searchParams.get("estado")
  const nome = url.searchParams.get("nome")

  const token = cookieStore.get("token")?.value
  const userData = parseJwt(token)

  try {
    let apiUrl =
      process.env.NEXT_PUBLIC_BASE_URL +
      "/v1/clientes/profissionais/" +
      userData.user_id +
      "?page=" +
      page +
      "&size=6&orderBy=createdAt"

    const res = await fetch(apiUrl, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })

    const clientes = await res.json()

    return NextResponse.json(clientes)
  } catch (error) {
    return NextResponse.json(error)
  }
}

export async function POST(req: Request) {
  const cookieStore = cookies()

  const request = await req.json()

  const token = cookieStore.get("token")?.value

  const maxRetries = 3
  let retryCount = 0

  while (retryCount < maxRetries) {
    try {
      let apiUrl = process.env.NEXT_PUBLIC_BASE_URL + "/v1/clientes"

      const response = await axios.post(apiUrl, request.data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })

      const data = response.data

      return NextResponse.json(data)
    } catch (error) {
      console.error("API request failed:", error)
      retryCount++
      await delay(500)
    }
  }

  return NextResponse.json(
    {
      error: "API request failed after maximum retries",
    },
    { status: 400 },
  )
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
