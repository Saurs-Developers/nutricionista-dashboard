"use client"

import { useFormContext } from "react-hook-form"

import { steps, useAddPatientContext } from "./add-patient-context"

export function CurrentStep() {
  const { currentStep, submitCliente } = useAddPatientContext()

  const { handleSubmit, reset } = useFormContext()

  const CurrentStep = steps[currentStep]

  const onSubmit = (data: any) => {
    submitCliente(data)
    reset()

    setTimeout(() => {
      window.location.reload()
    }, 5000)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CurrentStep />
    </form>
  )
}
