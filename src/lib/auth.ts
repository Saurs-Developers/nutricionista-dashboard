import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import { axiosPublic } from "./axios"

export const authOptions: NextAuthOptions = {
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
        const res = await axiosPublic.post("/v1/auth/login", credentials)

        const data = await res.data

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
      console.log({ account })

      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token as any
      return session
    },
  },
  pages: {
    signIn: "/auth/login",
  },
}
