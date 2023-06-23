import { cookies } from "next/headers"
import { NextResponse } from "next/server"

import { Token } from "@/@types/token"
import { api } from "@/lib/axios"
import { clearCookies, parseJwt } from "@/lib/utils"

export async function GET() {
  const cookieStore = cookies()

  const token = cookieStore.get("token")?.value
  const refresh_token = cookieStore.get("refresh_token")?.value

  const tokenData = parseJwt(token)

  if (tokenData.exp * 1000 < Date.now()) {
    try {
      const res = await api.post("/v1/auth/refresh", {
        refresh_token: refresh_token,
      })

      const data = res.data

      cookieStore.set("token", data.token, {
        path: "/",
        httpOnly: true,
      })

      cookieStore.set("refresh_token", data.refresh_token, {
        path: "/",
        httpOnly: true,
      })

      return NextResponse.json(
        { message: "Refreshed and request was done" },
        {
          status: res.status,
        },
      )
    } catch (e) {
      clearCookies(cookieStore)
      return NextResponse.json(e)
    }
  } else {
    return NextResponse.json(
      { message: "Request was done and the token didn't have to be refreshed" },
      {
        status: 200,
      },
    )
  }
}
