"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/shared/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/shared/command"
import { Input } from "@/components/shared/input"
import { Label } from "@/components/shared/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shared/popover"
import { cn } from "@/lib/utils"

import { AddPatientDialog } from "./add-patient-dialog"

export function PatientsNavBar() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ]

  return (
    <nav className="flex items-end gap-5 w-full mt-9">
      <div className="flex flex-col gap-2 max-w-[364px] w-full">
        <Label>Pesquisar</Label>
        <Input placeholder="Ex: Alírio" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Estado</Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline-default"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : "Select framework..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <AddPatientDialog />
    </nav>
  )
}
