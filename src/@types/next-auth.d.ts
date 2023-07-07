import { User as NextAuthUser } from "next-auth"

declare module "next-auth" {
  interface User extends NextAuthUser {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    user_roles: string[]
    sub: string
    user_id: string
  }
}
