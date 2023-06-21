import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session extends Record<string, unknown> {
    user: {
      access_token: string
      refresh_token: string
    }
  }
}
