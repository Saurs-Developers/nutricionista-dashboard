import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { signOut } from "next-auth/react"

import { clearCookies } from "@/lib/utils"

export async function GET() {
  const cookieStore = cookies()

  signOut()
  clearCookies(cookieStore)

  return NextResponse.json({ message: "ALIRIO" })
}
