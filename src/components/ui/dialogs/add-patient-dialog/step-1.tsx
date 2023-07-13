"use client"

import { useEffect, useState } from "react"
import { SelectSingleEventHandler } from "react-day-picker"
import { Controller, useFormContext } from "react-hook-form"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon, Check, ChevronsUpDown, Loader2Icon } from "lucide-react"

import { Button } from "@/components/shared/button"
import { Calendar } from "@/components/shared/calendar"
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
  SelectTrigger,
  SelectValue,
} from "@/components/shared/select"
import { Textarea } from "@/components/shared/textarea"
import { AddPatientSchema } from "@/schemas/add_patient"
import { numberMask } from "@/utils/masks"
import { cn } from "@/utils/styles"

import { useAddPatientContext } from "./add-patient-context"

export function StepOne() {
  const {
    register,
    control,
    setValue,
    getValues,
    watch,
    formState: { errors, isValid },
  } = useFormContext<AddPatientSchema>()

  const { handleNextStep, cidades, estados, uf, setUf, isCidadesLoading } =
    useAddPatientContext()

  const [open, setOpen] = useState(false)
  const [cidadeSearch, setCidadeSearch] = useState("")

  const cidadeForm = getValues("cidade")

  const estado = watch("estado")

  useEffect(() => {
    setValue("cidade", "")
    setUf(estado)
  }, [uf, cidadeSearch, estado])

  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-6">
      <Input
        {...register("nome")}
        label="Nome"
        placeholder="Ex: Alírio"
        error={errors.nome?.message}
      />
      <div>
        <Label>Data de nascimento</Label>
        <Controller
          name="data_nascimento"
          render={({ field: { onChange, value } }) => (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline-default"}
                  className={cn(
                    "justify-start w-full text-left mt-1 font-normal",
                    !value && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {value ? (
                    format(new Date(value), "PPP", { locale: ptBR })
                  ) : (
                    <span>Selecionar data</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="p-0">
                <Calendar
                  mode="single"
                  selected={new Date(value)}
                  onSelect={onChange as unknown as SelectSingleEventHandler}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          )}
          control={control}
        />
        {errors.data_nascimento?.message && (
          <p className="leading-7 text-sm text-danger mt-1 text-red-500 font-normal">
            {errors.data_nascimento?.message}
          </p>
        )}
      </div>
      <Input
        {...register("email")}
        label="E-mail"
        placeholder="Ex: email@exemplo.com"
        error={errors.email?.message}
      />
      <div>
        <Label className="text-sm">Sexo</Label>
        <Controller
          control={control}
          name="sexo"
          render={({ field: { onChange, value } }) => (
            <>
              <Select value={value} onValueChange={onChange}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Selecionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="MASCULINO">Masculino</SelectItem>
                    <SelectItem value="FEMININO">Feminino</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.sexo?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.sexo?.message}
                </p>
              )}
            </>
          )}
        />
      </div>
      <div>
        <Label className="text-sm">Estado</Label>
        <Controller
          name="estado"
          render={({ field: { onChange, value } }) => (
            <Select value={value} onValueChange={onChange}>
              <SelectTrigger>
                <SelectValue placeholder="Selecionar" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectGroup>
                  {estados?.map((estado, key) => {
                    return (
                      <SelectItem key={key} value={estado.sigla}>
                        {estado.nome}, ({estado.sigla})
                      </SelectItem>
                    )
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        {errors.estado?.message && (
          <p className="leading-7 text-sm text-danger mt-1 text-red-500 font-normal">
            {errors.estado?.message}
          </p>
        )}
      </div>
      <div>
        <Label className="block text-sm">Cidade</Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            disabled={cidades?.length === 0 || isCidadesLoading}
            asChild
          >
            <Button
              variant="outline-default"
              role="combobox"
              aria-expanded={open}
              className="justify-between mt-1 w-full"
            >
              {isCidadesLoading && (
                <Loader2Icon className="w-4 h-4 animate-spin" />
              )}
              {cidadeForm
                ? cidades?.find(
                    (municipio) => municipio.nome.toLowerCase() === cidadeForm,
                  )?.nome
                : "Selecionar cidade..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 h-full">
            <Command shouldFilter={false}>
              <CommandInput
                onValueChange={(e) => setCidadeSearch(e)}
                placeholder="Procurar cidade..."
              />
              <CommandEmpty>Cidade não encontrada</CommandEmpty>
              <CommandGroup className="h-full">
                {cidades
                  ?.filter((cidade) =>
                    cidade.nome
                      .toLowerCase()
                      .includes(cidadeSearch?.toLowerCase()),
                  )
                  .slice(0, 10)
                  .map((municipio, key) => {
                    return (
                      <CommandItem
                        key={municipio.id}
                        onSelect={(currentValue) => {
                          setValue(
                            "cidade",
                            currentValue === cidadeForm ? "" : currentValue,
                          )
                          setOpen(false)
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            cidadeForm === municipio.nome.toLowerCase()
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                        {municipio.nome}
                      </CommandItem>
                    )
                  })}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <Input
        label="N. de telefone"
        {...register("contato", {
          onChange: (e) => {
            setValue("contato", numberMask(e.target.value))
          },
        })}
        placeholder="Ex: (69) 99999-9999"
        error={errors.contato?.message}
      />
      <div className="col-span-2">
        <Label className="text-sm">Notas</Label>
        <Textarea
          {...register("objetivo")}
          className="resize-none mt-1"
          placeholder="Ex: Não gosta de comer picles"
        />
      </div>
      <div className="flex justify-end col-span-2">
        <Button disabled={!isValid} type="button" onClick={handleNextStep}>
          Próximo
        </Button>
      </div>
    </div>
  )
}
