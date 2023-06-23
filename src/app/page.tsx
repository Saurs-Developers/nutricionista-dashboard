"use client"

import axios from "axios"
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
      <div className="flex flex-col gap-4 mt-4 items-start max-w-[100px]">
        <Button
          className="w-full"
          onClick={async () => {
            try {
              const res = await axios.get("/api/request")

              const data = await res.data
              console.log(res)
            } catch (e) {
              console.log(e)
            }
          }}
        >
          fetch
        </Button>
        <Button className="w-full" onClick={() => signIn()}>
          Sign in
        </Button>
        <Button className="w-full" onClick={() => signOut()}>
          Sign out
        </Button>
      </div>
    </div>
  )
}
