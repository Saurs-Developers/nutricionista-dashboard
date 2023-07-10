"use client"

import { ReactNode } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

import { Fallback } from "./shared/fallback"

export function IsSignedIn({ children }: { children: ReactNode }) {
  const { status } = useSession()
  const router = useRouter()

  console.log(status)

  if (status === "loading") {
    return <Fallback />
  }

  if (status === "unauthenticated") router.push("/auth/login")

  return <>{children}</>
}
