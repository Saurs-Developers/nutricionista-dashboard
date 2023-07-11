import { ReactNode } from "react"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { Session } from "next-auth"

export async function IsSignedIn({ children }: { children: ReactNode }) {
  const res = await fetch("http://localhost:3000/api/auth/session", {
    headers: headers(),
  })

  const data: Session = await res.json()

  if (!data.user) return redirect("/auth/login")

  return <>{children}</>
}
