"use client"

import { signIn, signOut, useSession } from "next-auth/react"

import { Button } from "@/components/Button"
import { Typography } from "@/components/Typography"
import { api } from "@/lib/axios"

export default function Page() {
  const { data, status } = useSession()

  return (
    <div className="text-white">
      <Typography variant="h4">{JSON.stringify(data, null, 2)}</Typography>
      <Typography variant="h4">{status}</Typography>
      <Button
        onClick={async () => {
          try {
            const res = await api.get("/clientes")

            const data = await res.data
            console.log(res)

            console.log(data)
          } catch (e) {
            console.log(e)
          }
        }}
      >
        fetch
      </Button>
      <Button onClick={() => signIn()}>Sign in</Button>
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  )
}
