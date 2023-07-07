import { NextResponse } from "next/server"
import { withAuth } from "next-auth/middleware"

import { parseJwt } from "./lib/utils"

export default withAuth(async function middleware(req, res) {
  const token = req.cookies.get("token")?.value
  const refresh_token = req.cookies.get("refresh_token")?.value

  const response = NextResponse.next()

  if (token) {
    const tokenData = parseJwt(token)

    if (tokenData && tokenData.exp * 1000 < Date.now()) {
      const tokenRes = await fetch("http://localhost/api/v1/auth/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh_token: refresh_token }),
      })

      const data = await tokenRes.json()

      if (tokenRes.status === 200) {
        response.cookies.set("token", data.token, {
          path: "/",
          httpOnly: true,
        })

        response.cookies.set({
          name: "refresh_token",
          value: data.refresh_token,
          httpOnly: true,
        })
        console.log("tokens successfully refreshed")
      } else if (tokenRes.status === 401) {
        response.cookies.delete("token")
        response.cookies.delete("refresh_token")
        response.cookies.delete("next-auth.session-token")
        await fetch("http://localhost/api/v1/auth/signout", {
          method: "POST",
        })
      }
    } else {
      console.log("its all fine")
    }
  } else {
    response.cookies.delete("next-auth.session-token")
  }

  return response
})

export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"],
}
