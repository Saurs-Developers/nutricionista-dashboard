"use client"

import { useFormContext } from "react-hook-form"
import { useRouter } from "next/navigation"

import { Cliente } from "@/@types/clientes"
import { AddPatientSchema } from "@/schemas/add_patient"

import { steps, useAddPatientContext } from "./add-patient-context"

export function CurrentStep() {
  const { currentStep, submitCliente } = useAddPatientContext()

  const router = useRouter()

  const { handleSubmit, reset } = useFormContext<AddPatientSchema>()

  const CurrentStep = steps[currentStep]

  const onSubmit = (data: AddPatientSchema) => {
    submitCliente(data)
    // reset()

    // setTimeout(() => {
    //   router.refresh()
    // }, 5000)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CurrentStep />
    </form>
  )
}
