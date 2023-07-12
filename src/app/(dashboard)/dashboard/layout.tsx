import { ReactNode } from "react"

import { IsSignedIn } from "@/components/is-signed-in"
import { Navbar } from "@/components/ui/navbar"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Navbar />
      <main className="px-6 py-12 flex-1 max-h-screen overflow-auto">
        {children}
      </main>
    </div>
  )
}
