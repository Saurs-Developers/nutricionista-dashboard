"use client"

import { SelectSingleEventHandler } from "react-day-picker"
import { Controller, useFormContext } from "react-hook-form"
import { Label } from "@radix-ui/react-label"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/shared/button"
import { Calendar } from "@/components/shared/calendar"
import { Input } from "@/components/shared/input"
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
import { cn } from "@/lib/utils"
import { AddPatientSchema } from "@/schemas/add_patient"

import { useAddPatientContext } from "./add-patient-context"

export function StepOne() {
  const {
    register,
    control,
    formState: { errors, isValid },
  } = useFormContext<AddPatientSchema>()
  const { handleNextStep } = useAddPatientContext()

  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-6">
      <Input
        {...register("nome")}
        label="Nome"
        placeholder="Ex: Alírio"
        error={errors.nome?.message}
      />
      <Input
        {...register("email")}
        label="E-mail"
        placeholder="Ex: email@exemplo.com"
        error={errors.email?.message}
      />
      <Input
        {...register("estado")}
        label="Estado"
        placeholder="Ex: Acre"
        error={errors.estado?.message}
      />
      <Input
        {...register("cidade")}
        label="Cidade"
        placeholder="Ex: Rio Branco"
        error={errors.cidade?.message}
      />
      <div>
        <Label className="text-sm mb-1">Sexo</Label>
        <Controller
          control={control}
          name="sexo"
          render={({ field: { onChange, value } }) => (
            <>
              <Select value={value} onValueChange={onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="feminino">Feminino</SelectItem>
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
      <div className="flex flex-col">
        <Label className="text-sm">Data de nascimento</Label>
        <Controller
          name="data_nascimento"
          render={({ field: { onChange, value } }) => (
            <>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline-default"}
                    className={cn(
                      "justify-start text-left font-normal mt-1",
                      !value && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {value ? (
                      format(value, "PPP", { locale: ptBR })
                    ) : (
                      <span>Selecionar data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="p-0">
                  <Calendar
                    mode="single"
                    selected={value}
                    onSelect={onChange as SelectSingleEventHandler}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {errors.data_nascimento?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.data_nascimento?.message}
                </p>
              )}
            </>
          )}
          control={control}
        />
      </div>
      <Input
        {...register("contato")}
        label="N. de telefone"
        placeholder="Ex: (69) 99999-9999"
        error={errors.contato?.message}
      />
      <Input
        {...register("notas")}
        label="Objetivo"
        placeholder="Ex: Perder peso"
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
