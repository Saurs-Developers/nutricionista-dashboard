import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    user_roles: string[]
    sub: string
    user_id: string
  }
}
