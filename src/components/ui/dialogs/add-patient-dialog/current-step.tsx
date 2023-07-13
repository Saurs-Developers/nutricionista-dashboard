"use client"

import { useFormContext } from "react-hook-form"

import { AddPatientSchema } from "@/schemas/add_patient"

import { steps, useAddPatientContext } from "./add-patient-context"

export function CurrentStep() {
  const { currentStep, submitCliente } = useAddPatientContext()

  const { handleSubmit } = useFormContext<AddPatientSchema>()

  const CurrentStep = steps[currentStep]

  const onSubmit = (data: AddPatientSchema) => {
    submitCliente(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CurrentStep />
    </form>
  )
}
