import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import { api, parseJwt } from "@/utils/api"

export const nextAuthConfig: NextAuthOptions = {
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

        if (data) {
          return data
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        let userInfo = parseJwt(user.token)
        const access_token = user.token
        const refresh_token = user.refresh_token
        userInfo = { ...userInfo, refresh_token, access_token }
        token.access_token_expires = userInfo.exp

        return { ...token, ...userInfo }
      }

      if ((token.access_token_expires as number) < Date.now()) {
        console.log("tokens valid")
      } else {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/refresh`,
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                refresh_token: token.refresh_token,
              }),
            },
          )

          const tokens = await res.json()

          if (res.ok) {
            const tokenInfo = parseJwt(tokens.token)

            return {
              ...token,
              access_token: tokens.token,
              refresh_token: tokens.refresh_token,
              access_token_expires: tokenInfo.exp,
            }
          }
        } catch (error) {
          console.log(error)
          return {
            error: "Error refreshing token",
          }
        }
      }

      return token
    },
    async session({ session, token }) {
      session.user = token as any

      return session
    },
    async redirect({ baseUrl }) {
      const customUrl = "/dashboard/clientes/1"

      const finalUrl = baseUrl + customUrl

      return finalUrl
    },
  },
  pages: {
    signIn: "/auth/login",
  },
}
