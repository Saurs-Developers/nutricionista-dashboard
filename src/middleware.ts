import { withAuth } from "next-auth/middleware"

export default withAuth(function middleware(req) {
  console.log("ping")
})

// export const config = { matcher: ["/dashboard/:path*", "/api/:path*"] }
