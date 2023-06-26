import { useFormContext } from "react-hook-form"
import { Label } from "@radix-ui/react-label"

import { DatePickerDemo } from "@/components/shared/date-picker"
import { Input } from "@/components/shared/input"
import { Textarea } from "@/components/shared/textarea"

export function StepOne() {
  const { register } = useFormContext()

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
      <DatePickerDemo />
      <Input
        type="date"
        {...register("data_nascimento")}
        label="Data de nascimento"
        placeholder="Ex: 14/04/1992"
      />
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
        <Label className="mb-1">Notas</Label>
        <Textarea
          {...register("objetivo")}
          className="resize-none"
          placeholder="Ex: Não gosta de comer picles"
        />
      </div>
    </div>
  )
}
