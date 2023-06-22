import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
  const cookieStore = cookies()

  cookieStore.set("token", "", {
    path: "/",
    httpOnly: true,
  })

  cookieStore.set("refresh_token", "", {
    path: "/",
    httpOnly: true,
  })
  return NextResponse.redirect("http://localhost:3000/")
}
