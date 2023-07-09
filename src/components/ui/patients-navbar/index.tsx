"use client"

import { ChangeEvent, useEffect, useRef, useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { useRouter } from "next/navigation"

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
import { cn } from "@/lib/utils"

interface Props {
  states: Region[]
  pageNumber: number
}

export function PatientsNavBar({ states, pageNumber }: Props) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const [search, setSearch] = useState("")

  const router = useRouter()

  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search !== "") {
        params.set("nome", search)
      } else {
        params.delete("nome")
      }

      url.search = params.toString()
      router.push(url.search)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [search])

  useEffect(() => {
    if (value !== "") {
      params.set("estado", value)
    } else {
      params.delete("estado")
    }

    url.search = params.toString()
    router.push(url.search)
  }, [value])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <nav className="flex items-end gap-5 w-full mt-9">
      <div className="flex flex-col gap-2 max-w-[364px] w-full">
        <Label>Pesquisar</Label>
        <Input onChange={handleChange} placeholder="Ex: Alírio" />
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
              <CommandEmpty>Estado não encontrado.</CommandEmpty>
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
      <AddPatientDialog />
    </nav>
  )
}
