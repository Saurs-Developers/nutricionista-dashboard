import { ReactNode } from "react"

import { NextAuthSession } from "@/components/NextAuthSession"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NextAuthSession>{children}</NextAuthSession>
    </div>
  )
}
