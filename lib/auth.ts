import Cookies from "cookies"
import { NextApiRequest, NextApiResponse } from "next"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import { api } from "./axios"
import { parseJwt } from "./utils"

type NextAuthOptionsCallback = (
  req: NextApiRequest,
  res: NextApiResponse,
) => NextAuthOptions

export const nextAuthOptions: NextAuthOptionsCallback = (req, res) => {
  const cookies = new Cookies(req, res)

  return {
    providers: [
      CredentialsProvider({
        name: "Login",
        credentials: {
          email: {
            label: "E-mail",
            type: "email",
            placeholder: "email@example.com",
          },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          const axiosResponse = await api.post("/v1/auth/login", credentials)
          const data = await axiosResponse.data

          cookies.set("token", data.token, {
            httpOnly: true,
            path: "/",
          })

          cookies.set("refresh_token", data.refresh_token, {
            httpOnly: true,
            path: "/",
          })

          const user = parseJwt(data.token)

          if (user) {
            return user
          } else {
            return null
          }
        },
      }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        return { ...user, ...token }
      },
      async session({ session, token }) {
        session.user = token as any
        return session
      },
      async redirect({ baseUrl }) {
        const customUrl = "/dashboard"

        const finalUrl = baseUrl + customUrl

        return finalUrl
      },
    },
    pages: {
      signIn: "/auth/login",
    },
    events: {
      async signOut() {
        cookies.set("token", "", {
          httpOnly: true,
          path: "/",
        })

        cookies.set("refresh_token", "", {
          httpOnly: true,
          path: "/",
        })
      },
    },
  }
}
