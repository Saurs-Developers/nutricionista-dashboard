import { Label } from "@radix-ui/react-label"

import { Input } from "@/components/shared/input"
import { Textarea } from "@/components/shared/textarea"

export function StepOne() {
  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-6">
      <Input label="Nome" placeholder="Ex: Alírio" />
      <Input label="E-mail" placeholder="Ex: email@exemplo.com" />
      <Input label="Estado" placeholder="Ex: Acre" />
      <Input label="Cidade" placeholder="Ex: Rio Branco" />
      <Input label="Sexo" placeholder="Ex: Masculino" />
      <Input label="Data de nascimento" placeholder="Ex: 14/04/1992" />
      <Input label="N. de telefone" placeholder="Ex: (69) 99999-9999" />
      <Input label="Objetivo" placeholder="Ex: Perder peso" />
      <div className="col-span-2">
        <Label className="mb-1">Notas</Label>
        <Textarea
          className="resize-none"
          placeholder="Ex: Não gosta de comer picles"
        />
      </div>
    </div>
  )
}
