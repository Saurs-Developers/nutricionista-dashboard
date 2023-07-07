import { withAuth } from "next-auth/middleware"

export default withAuth(async function middleware(req, res) {
  console.log("ping")
})

export const config = { matcher: ["/dashboard/:path*", "/api/:path*"] }
