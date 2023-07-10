import React from "react"
import { Nunito } from "next/font/google"

import { QueryProvider } from "@/components/query-provider"
import { Toaster } from "@/components/shared/toaster"
import { NextAuthSession } from "@/components/ui/nextauth-session"

import "./globals.css"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata = {
  title: "G Training - Dashboard",
  description: "Dashboard de nutrição",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <QueryProvider>
        <NextAuthSession>
          <body className={`${nunito.className} text-zinc-700`}>
            {children}
            <Toaster />
          </body>
        </NextAuthSession>
      </QueryProvider>
    </html>
  )
}
