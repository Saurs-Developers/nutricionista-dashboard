"use client"

import { ReactNode } from "react"
import { useRouter } from "next/navigation"

export function RouterBack({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const router = useRouter()

  return (
    <button className={className} onClick={() => router.back()}>
      {children}
    </button>
  )
}
