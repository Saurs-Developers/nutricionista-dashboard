"use client"

import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/shared/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/dialog"
import { AddPatientSchema, addPatientSchema } from "@/schemas/add_patient"

import { PatientContextProvider } from "./add-patient-context"
import { CurrentStep } from "./current-step"

export function AddPatientDialog() {
  const methods = useForm<AddPatientSchema>({
    defaultValues: {
      observacao: {
        historico_doenca_familiar: "",
        historico_doenca_pessoal: "",
        lesao_musculoesqueletica: "",
        historico_cirurgia: "",
        medicacao: "",
        habito_fumar_ou_beber: "",
        alergia_alimentar: "",
        alergia_medicamento: "",
      },
    },
    resolver: zodResolver(addPatientSchema),
    mode: "onChange",
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Criar paciente</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[824px] w-full max-h-[602px] overflow-auto">
        <DialogHeader>
          <DialogTitle>Criar paciente</DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <PatientContextProvider>
            <CurrentStep />
            <button onClick={() => methods.reset()}>Reset</button>
          </PatientContextProvider>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
