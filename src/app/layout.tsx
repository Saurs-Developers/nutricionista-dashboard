import React from "react"
import { Nunito } from "next/font/google"

import "./globals.css"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata = {
  title: "Flex Coach - Dashboard",
  description: "Dashboard de nutrição",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${nunito.className} bg-zinc-900`}>{children}</body>
    </html>
  )
}
