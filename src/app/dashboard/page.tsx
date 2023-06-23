"use client"

import { signOut } from "next-auth/react"

import { Button } from "@/components/Button"

export default function Dashboard() {
  return (
    <div className="text-white">
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  )
}
