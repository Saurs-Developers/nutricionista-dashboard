import { useState } from "react"
import { Check, ChevronsUpDown, Trash2 } from "lucide-react"

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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/select"
import { Typography } from "@/components/shared/typography"
import { cn } from "@/utils/styles"

export function StepTwo() {
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
    <div className="flex flex-col gap-6">
      <header>
        <Typography variant="h4" weight="bold">
          Exercícios
        </Typography>
        <div className="grid grid-cols-9 gap-4 h-16 items-end mt-4">
          <div className="col-span-5 flex flex-col gap-1">
            <Label>Estado</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline-default"
                  role="combobox"
                  aria-expanded={open}
                  className="justify-between"
                >
                  {value
                    ? frameworks.find((framework) => framework.value === value)
                        ?.label
                    : "Select framework..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-[var(--radix-popover-trigger-width)] p-0"
              >
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
                            value === framework.value
                              ? "opacity-100"
                              : "opacity-0",
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
          <div className="col-span-2">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button className="col-span-2">Adicionar</Button>
        </div>
      </header>
      <section className="grid grid-cols-9 overflow-auto max-h-[348px] items-end gap-4 full">
        <Input
          containerStyles="col-span-2"
          value="Rosca direta"
          label="Exercício"
          readOnly
        />
        <Input
          containerStyles="col-span-2"
          label="Observações"
          placeholder="Ex: Bi-set + 15..."
        />
        <Input label="Séries" placeholder="Ex: Bi-set + 15..." />
        <Input label="Repetições" placeholder="Ex: 15" />
        <Input label="Descanso" placeholder="Ex: 45s" />
        <Input label="Carga" placeholder="Ex: 40kg" />
        <Button variant="destructive">
          <Trash2 />
        </Button>
        <Input
          containerStyles="col-span-2"
          value="Rosca direta"
          label="Exercício"
          readOnly
        />
        <Input
          containerStyles="col-span-2"
          label="Observações"
          placeholder="Ex: Bi-set + 15..."
        />
        <Input label="Séries" placeholder="Ex: Bi-set + 15..." />
        <Input label="Repetições" placeholder="Ex: 15" />
        <Input label="Descanso" placeholder="Ex: 45s" />
        <Input label="Carga" placeholder="Ex: 40kg" />
        <Button variant="destructive">
          <Trash2 />
        </Button>
        <Input
          containerStyles="col-span-2"
          value="Rosca direta"
          label="Exercício"
          readOnly
        />
        <Input
          containerStyles="col-span-2"
          label="Observações"
          placeholder="Ex: Bi-set + 15..."
        />
        <Input label="Séries" placeholder="Ex: Bi-set + 15..." />
        <Input label="Repetições" placeholder="Ex: 15" />
        <Input label="Descanso" placeholder="Ex: 45s" />
        <Input label="Carga" placeholder="Ex: 40kg" />
        <Button variant="destructive">
          <Trash2 />
        </Button>
        <Input
          containerStyles="col-span-2"
          value="Rosca direta"
          label="Exercício"
          readOnly
        />
        <Input
          containerStyles="col-span-2"
          label="Observações"
          placeholder="Ex: Bi-set + 15..."
        />
        <Input label="Séries" placeholder="Ex: Bi-set + 15..." />
        <Input label="Repetições" placeholder="Ex: 15" />
        <Input label="Descanso" placeholder="Ex: 45s" />
        <Input label="Carga" placeholder="Ex: 40kg" />
        <Button variant="destructive">
          <Trash2 />
        </Button>
        <Input
          containerStyles="col-span-2"
          value="Rosca direta"
          label="Exercício"
          readOnly
        />
        <Input
          containerStyles="col-span-2"
          label="Observações"
          placeholder="Ex: Bi-set + 15..."
        />
        <Input label="Séries" placeholder="Ex: Bi-set + 15..." />
        <Input label="Repetições" placeholder="Ex: 15" />
        <Input label="Descanso" placeholder="Ex: 45s" />
        <Input label="Carga" placeholder="Ex: 40kg" />
        <Button variant="destructive">
          <Trash2 />
        </Button>
        <Input
          containerStyles="col-span-2"
          value="Rosca direta"
          label="Exercício"
          readOnly
        />
        <Input
          containerStyles="col-span-2"
          label="Observações"
          placeholder="Ex: Bi-set + 15..."
        />
        <Input label="Séries" placeholder="Ex: Bi-set + 15..." />
        <Input label="Repetições" placeholder="Ex: 15" />
        <Input label="Descanso" placeholder="Ex: 45s" />
        <Input label="Carga" placeholder="Ex: 40kg" />
        <Button variant="destructive">
          <Trash2 />
        </Button>
        <Input
          containerStyles="col-span-2"
          value="Rosca direta"
          label="Exercício"
          readOnly
        />
        <Input
          containerStyles="col-span-2"
          label="Observações"
          placeholder="Ex: Bi-set + 15..."
        />
        <Input label="Séries" placeholder="Ex: Bi-set + 15..." />
        <Input label="Repetições" placeholder="Ex: 15" />
        <Input label="Descanso" placeholder="Ex: 45s" />
        <Input label="Carga" placeholder="Ex: 40kg" />
        <Button variant="destructive">
          <Trash2 />
        </Button>
      </section>
    </div>
  )
}
