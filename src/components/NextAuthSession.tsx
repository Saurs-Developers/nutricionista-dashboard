"use client"

import React from "react"

export function NextAuthSession({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}
