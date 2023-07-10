import { NextRequest, NextResponse } from "next/server"

import { parseJwt } from "./src/lib/utils"

export async function middleware(req: NextRequest, res: NextResponse) {
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

        req.headers.set("token", data.token)
        req.headers.set("refresh_token", data.refresh_tokentoken)

        console.log("tokens were successfully refreshed")
        return response
      } else if (tokenRes.status === 401) {
        response.cookies.delete("token")
        response.cookies.delete("refresh_token")
        response.cookies.delete("next-auth.session-token")
        await fetch("http://localhost/api/v1/auth/signout", {
          method: "POST",
        })
      }
    } else {
      console.log("tokens are still valid")
    }
  } else {
    response.cookies.delete("next-auth.session-token")
  }

  return response
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"],
}
