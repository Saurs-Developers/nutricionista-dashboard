import { ReactNode } from "react"
import { Apple, Dumbbell, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Typography } from "@/components/shared/Typography"

import Logo from "../../../public/logo.svg"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <aside
        className="flex flex-col gap-8 p-6 border-r-2 border-brand-primary h-screen
      "
      >
        <div className="flex items-center gap-4">
          <Image src={Logo} alt="" />
          <Typography variant="h5" weight="bold">
            G Training
          </Typography>
        </div>
        <Typography variant="h5" weight="bold">
          Nutricionista & Personal
        </Typography>
        <nav>
          <Typography variant="h5">Menu</Typography>
          <div className="flex flex-col gap-4 mt-6">
            <Link className="flex items-center gap-5" href="/dashboard">
              <Users />
              Pacientes
            </Link>
            <Link
              className="flex items-center gap-5"
              href="/dashboard/exercises"
            >
              <Dumbbell />
              Exercícios
            </Link>
            <Link
              className="flex items-center gap-5"
              href="/dashboard/patients"
            >
              <Apple />
              Alimentos
            </Link>
          </div>
        </nav>
      </aside>
      <main className="px-6 py-12 flex-1">{children}</main>
    </div>
  )
}
