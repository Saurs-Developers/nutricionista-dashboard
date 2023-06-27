"use client"

import { FormProvider, useForm } from "react-hook-form"

import { Button } from "@/components/shared/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/dialog"

import { PatientContextProvider } from "./add-patient-context"
import { CurrentStep } from "./current-step"

export function AddPatientDialog() {
  const methods = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Criar paciente</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[824px] w-full max-h-[586px] overflow-auto">
        <DialogHeader>
          <DialogTitle>Criar paciente</DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <PatientContextProvider>
              <CurrentStep />
            </PatientContextProvider>
            <Button type="submit">Enviar</Button>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
