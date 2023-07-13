"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { cn } from "@/utils/styles"

export default function ClienteTabs({ id }: { id: number }) {
  const pathName = useSelectedLayoutSegment()

  return (
    <div
      style={{
        boxShadow: "inset 0 -2px 0 0 #e2e8f0, 0 0px 0 0 #e2e8f0",
      }}
      className={cn("flex items-center text-muted-foreground")}
    >
      <Link
        href={"/dashboard/clientes/" + id}
        className={cn(
          "inline-flex items-center border-b-2 justify-center whitespace-nowrap px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:zinc-900 disabled:pointer-events-none disabled:opacity-50",
          pathName === null && "text-zinc-900 border-zinc-900",
        )}
      >
        Avaliação antropométrica
      </Link>
      <Link
        href={"/dashboard/clientes/" + id + "/treinos"}
        className={cn(
          "inline-flex items-center border-b-2 justify-center whitespace-nowrap px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:text-zinc-900 disabled:pointer-events-none disabled:opacity-50",
          pathName === "treinos" && "text-zinc-900 border-zinc-900",
        )}
      >
        Treinos
      </Link>
      <Link
        href={"/dashboard/clientes/" + id + "/dietas"}
        className={cn(
          "inline-flex items-center border-b-2 data-[state=active]:border-zinc-900 justify-center whitespace-nowrap px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:text-zinc-900 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-zinc-900",
          pathName === "dietas" && "text-zinc-900 border-zinc-900",
        )}
      >
        Dietas
      </Link>
      <Link
        href={"/dashboard/clientes/" + id + "/dados"}
        className={cn(
          "inline-flex items-center border-b-2 data-[state=active]:border-zinc-900 justify-center whitespace-nowrap px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:text-zinc-900 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-zinc-900",
          pathName === "dados" && "text-zinc-900 border-zinc-900",
        )}
      >
        Dados
      </Link>
    </div>
  )
}
