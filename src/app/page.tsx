"use client"

import { useSession } from "next-auth/react"

import { Typography } from "@/components/Typography"

export default function Page() {
  const { data, status } = useSession()

  return (
    <div className="text-white">
      <Typography variant="h4">{JSON.stringify(data, null, 2)}</Typography>
      <Typography variant="h4">{status}</Typography>
    </div>
  )
}
