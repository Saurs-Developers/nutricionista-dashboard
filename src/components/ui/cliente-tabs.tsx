"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { cn } from "@/lib/utils"

export default function ClienteTabs({ id }: { id: string }) {
  const pathName = useSelectedLayoutSegment()

  return (
    <div
      style={{
        boxShadow: "inset 0 -2px 0 0 #e2e8f0, 0 0px 0 0 #e2e8f0",
      }}
      className={cn("flex items-center text-muted-foreground")}
    >
      <Link
        href={"/cliente/" + id}
        className={cn(
          "inline-flex items-center border-b-2 justify-center whitespace-nowrap px-4 py-3 text-sm font-medium transition-all focus-visible:outline-none focus-visible:text-gf-blue disabled:pointer-events-none disabled:opacity-50",
          pathName === "pending" && "text-gf-blue",
          pathName === "pending" && "border-gf-blue",
        )}
      >
        Avaliação antropométrica
      </Link>
      <Link
        href={"/jobs/job_overview/" + id + "/approved"}
        className={cn(
          "inline-flex items-center border-b-2 justify-center whitespace-nowrap px-4 py-3 text-sm font-medium transition-all focus-visible:outline-none focus-visible:text-gf-blue disabled:pointer-events-none disabled:opacity-50",
          pathName === "approved" && "text-gf-blue",
          pathName === "approved" && "border-gf-blue",
        )}
      >
        Treinos
      </Link>
      <Link
        href={"/jobs/job_overview/" + id + "/rejected"}
        className={cn(
          "inline-flex items-center border-b-2 data-[state=active]:border-gf-blue justify-center whitespace-nowrap px-4 py-3 text-sm font-medium transition-all focus-visible:outline-none focus-visible:text-gf-blue disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gf-blue",
          pathName === "rejected" && "text-gf-blue",
          pathName === "rejected" && "border-gf-blue",
        )}
      >
        Dietas
      </Link>
      <Link
        href={"/jobs/job_overview/" + id + "/rejected"}
        className={cn(
          "inline-flex items-center border-b-2 data-[state=active]:border-gf-blue justify-center whitespace-nowrap px-4 py-3 text-sm font-medium transition-all focus-visible:outline-none focus-visible:text-gf-blue disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gf-blue",
          pathName === "rejected" && "text-gf-blue",
          pathName === "rejected" && "border-gf-blue",
        )}
      >
        Dados
      </Link>
    </div>
  )
}
