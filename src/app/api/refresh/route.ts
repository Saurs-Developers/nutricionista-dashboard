import axios from "axios"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { signOut } from "next-auth/react"

export async function GET() {
  const cookieStore = cookies()

  const refresh_token = cookieStore.get("refresh_token")

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/refresh`,
      {
        refresh_token: refresh_token!.value,
      },
    )

    const data = await res.data

    if (res.status === 200) {
      cookieStore.set("token", data.token, {
        path: "/",
        httpOnly: true,
      })

      cookieStore.set("refresh_token", data.refresh_token, {
        path: "/",
        httpOnly: true,
      })

      return NextResponse.json({ message: "Tokens successfully refreshed." })
    }
  } catch (e) {
    cookieStore.set("token", "", {
      path: "/",
      httpOnly: true,
    })

    cookieStore.set("refresh_token", "", {
      path: "/",
      httpOnly: true,
    })
    signOut()
    return NextResponse.json({ message: "Token expired." })
  }
}
