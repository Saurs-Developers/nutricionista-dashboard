"use client"

import { useFormContext } from "react-hook-form"
import { Label } from "@radix-ui/react-label"

import { Button } from "@/components/shared/button"
import { DatePicker } from "@/components/shared/date-picker"
import { Input } from "@/components/shared/input"
import { Textarea } from "@/components/shared/textarea"

import { useFormSteps } from "./form-steps-context"

export function StepOne() {
  const { register } = useFormContext()
  const { handleNextStep } = useFormSteps()

  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-6">
      <Input {...register("nome")} label="Nome" placeholder="Ex: Alírio" />
      <Input
        {...register("email")}
        label="E-mail"
        placeholder="Ex: email@exemplo.com"
      />
      <Input {...register("estado")} label="Estado" placeholder="Ex: Acre" />
      <Input
        {...register("cidade")}
        label="Cidade"
        placeholder="Ex: Rio Branco"
      />
      <Input {...register("sexo")} label="Sexo" placeholder="Ex: Masculino" />
      <div className="flex flex-col">
        <Label className="mb-1 text-sm">Data de nascimento</Label>
        <DatePicker />
      </div>
      <Input
        {...register("contato")}
        label="N. de telefone"
        placeholder="Ex: (69) 99999-9999"
      />
      <Input
        {...register("notas")}
        label="Objetivo"
        placeholder="Ex: Perder peso"
      />
      <div className="col-span-2">
        <Label className="mb-1 text-sm">Notas</Label>
        <Textarea
          {...register("objetivo")}
          className="resize-none"
          placeholder="Ex: Não gosta de comer picles"
        />
      </div>
      <div className="flex justify-end col-span-2">
        <Button type="button" onClick={handleNextStep}>
          Próximo
        </Button>
      </div>
    </div>
  )
}
