import { ReactNode } from "react"

import { Navbar } from "@/components/ui/navbar"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Navbar />
      <main className="px-6 py-12 flex-1">{children}</main>
    </div>
  )
}
