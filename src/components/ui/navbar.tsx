"use client"

import clsx from "clsx"
import { Apple, Dumbbell, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { Typography } from "@/components/shared/typography"

import Logo from "../../../public/logo.svg"

export function Navbar() {
  const activeSegment = useSelectedLayoutSegment()

  return (
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
          <Link
            className={clsx(
              "flex items-center gap-5 p-2 rounded-md",
              (activeSegment === null || activeSegment === "patient") &&
                "bg-slate-100",
            )}
            href="/dashboard"
          >
            <Users />
            Pacientes
          </Link>
          <Link
            className={clsx(
              "flex items-center gap-5 p-2 rounded-md",
              activeSegment === "exercises" && "bg-slate-100",
            )}
            href="/dashboard/exercises"
          >
            <Dumbbell />
            Exercícios
          </Link>
          <Link
            className={clsx(
              "flex items-center gap-5 p-2 rounded-md",
              activeSegment === "foods" && "bg-slate-100",
            )}
            href="/dashboard/foods"
          >
            <Apple />
            Alimentos
          </Link>
        </div>
      </nav>
    </aside>
  )
}
