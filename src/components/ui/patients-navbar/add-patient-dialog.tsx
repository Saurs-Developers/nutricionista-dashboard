import { Button } from "@/components/shared/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/dialog"
import { Input } from "@/components/shared/input"
import { Label } from "@/components/shared/label"
import { Textarea } from "@/components/shared/textarea"

export function AddPatientDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Criar paciente</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[824px] w-full">
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
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
