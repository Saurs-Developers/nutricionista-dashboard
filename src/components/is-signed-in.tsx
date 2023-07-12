import { ReactNode } from "react"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { nextAuthConfig } from "@/lib/auth"

export async function IsSignedIn({ children }: { children: ReactNode }) {
  const session = await getServerSession(nextAuthConfig)

  if (!session) {
    redirect("/auth/login")
  }

  return <>{children}</>
}
