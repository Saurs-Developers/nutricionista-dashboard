"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function Login() {
  const { data, status } = useSession()

  return (
    <div>
      <div className="mt-2 text-white">{String(status)}</div>
      {data ? (
        <button
          onClick={() => signOut()}
          className="border-2 border-red-500 p-2 text-white"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => signIn()}
          className="border-2 border-red-500 p-2 text-white"
        >
          Log-in
        </button>
      )}
      <div>
        <button
          className="text-white border-red-500 border-2 p-2"
          onClick={() => console.log(data)}
        >
          asdfasd
        </button>
      </div>
    </div>
  )
}
