import { Button } from "@/components/shared/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/dialog"
import { Input } from "@/components/shared/input"
import { Label } from "@/components/shared/label"
import { Textarea } from "@/components/shared/textarea"
import { Typography } from "@/components/shared/typography"

import { DynamicRadioField } from "./dynamic-radio-field"

export function AddPatientDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Criar paciente</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[824px] w-full h-[578px] overflow-auto">
        <DialogHeader>
          <DialogTitle>Criar paciente</DialogTitle>
        </DialogHeader>
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
        <div className="mt-4 flex flex-col gap-4">
          <DynamicRadioField has={true} field={field} />
        </div>
        <Typography variant="body">
          Paciente cadastrado com sucesso. Um link de confirmação de conta com
          duração de 24h foi enviado no e-mail do paciente. Caso o paciente não
          acesse o link, o mesmo poderá solicitar um novo pelo aplicativo,
          através da troca de senha.
        </Typography>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
