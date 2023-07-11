import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      user_roles: string[]
      sub: string
      user_id: string
      token: string
      access_token_expires: number
      refresh_token: string
    }
  }

  interface Account {
    token: string
    refresh_token: string
    access_token_expires: number
  }

  interface User {
    token: string
    refresh_token: string
    user_roles: string[]
    user_id: string
    email: string
    exp: number
    access_token_expires: number
  }

  interface JWT {
    token: string
    refresh_token: string
    user_roles: string[]
    user_id: string
    email: string
    access_token_expires: number
  }
}
