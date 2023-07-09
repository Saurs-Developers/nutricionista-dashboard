"use client"

import clsx from "clsx"
import { Apple, Dumbbell, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { signOut } from "next-auth/react"

import { Typography } from "@/components/shared/typography"

import Logo from "../../../public/logo.svg"
import { Button } from "../shared/button"

export function Navbar() {
  const activeSegment = useSelectedLayoutSegment()

  return (
    <div className="flex flex-col justify-between p-6 border-r-2 border-brand-primary h-screen">
      <aside className="flex flex-col gap-8">
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
            <Link
              className={clsx(
                "flex items-center gap-5 p-2 rounded-md",
                (activeSegment === null ||
                  activeSegment === "clientes" ||
                  activeSegment === "cliente") &&
                  "bg-slate-100",
              )}
              href="/dashboard/clientes/1"
            >
              <Users />
              Pacientes
            </Link>
            <Link
              className={clsx(
                "flex items-center gap-5 p-2 rounded-md",
                activeSegment === "exercicios" && "bg-slate-100",
              )}
              href="/dashboard/exercicios"
            >
              <Dumbbell />
              Exercícios
            </Link>
            <Link
              className={clsx(
                "flex items-center gap-5 p-2 rounded-md",
                activeSegment === "comidas" && "bg-slate-100",
              )}
              href="/dashboard/comidas"
            >
              <Apple />
              Alimentos
            </Link>
          </div>
        </nav>
      </aside>
      <Button onClick={() => signOut()} variant="destructive_outline">
        Sair
      </Button>
    </div>
  )
}
