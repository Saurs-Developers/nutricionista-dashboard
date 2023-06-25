"use client"

import { Users, Dumbbell, Apple } from "lucide-react";
import { Typography } from "../shared/typography";
import Image from "next/image";

import Logo from "../../../public/logo.svg"
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function Navbar() {  
  const pathname = usePathname()
  
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
            <Link className={clsx("flex items-center gap-5 p-2 rounded-md", pathname === "/dashboard" && "bg-slate-100")} href="/dashboard">
              <Users />
              Pacientes
            </Link>
            <Link
              className={clsx("flex items-center gap-5 p-2 rounded-md", pathname === "/dashboard/exercises" && "bg-slate-100")}
              href="/dashboard/exercises"
            >
              <Dumbbell />
              Exercícios
            </Link>
            <Link
              className={clsx("flex items-center gap-5 p-2 rounded-md", pathname === "/dashboard/foods" && "bg-slate-100")}
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