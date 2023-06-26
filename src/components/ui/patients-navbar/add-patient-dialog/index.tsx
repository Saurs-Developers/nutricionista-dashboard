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

import { CurrentStep } from "./current-step"
import { FormStepsProvider } from "./form-steps-context"
import { StepThree } from "./step-3"

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
      <DialogContent className="max-w-[824px] w-full max-h-[578px] overflow-auto">
        <DialogHeader>
          <DialogTitle>Criar paciente</DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormStepsProvider>
              <CurrentStep />
            </FormStepsProvider>
            <Button type="submit">Enviar</Button>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
