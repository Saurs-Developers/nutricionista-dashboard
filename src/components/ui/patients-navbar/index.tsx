"use client"

import { useState } from "react"
import axios from "axios"
import { Check, ChevronsUpDown } from "lucide-react"
import { signOut } from "next-auth/react"

import { Region } from "@/@types"
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
import { AddPatientDialog } from "@/components/ui/dialogs/add-patient-dialog"
import { clearCookies, cn } from "@/lib/utils"

export function PatientsNavBar({ states }: { states: Region[] }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

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
                ? states.find((state) => state.nome.toLowerCase() === value)
                    ?.nome
                : "Selecionar estado..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
            <Command>
              <CommandInput placeholder="Procurar estado..." />
              <CommandEmpty>Estao não encontrado.</CommandEmpty>
              <CommandGroup>
                {states.map((state) => (
                  <CommandItem
                    key={state.nome}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === state.nome.toLowerCase()
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                    {state.nome}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <button
        onClick={() => {
          signOut()
        }}
      >
        Logout
      </button>
      <AddPatientDialog />
    </nav>
  )
}
