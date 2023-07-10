"use client"

import { useFormContext } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"

import { Cliente } from "@/@types/clientes"
import { client } from "@/lib/axios"

import { steps, useAddPatientContext } from "./add-patient-context"

export function CurrentStep() {
  const { currentStep, handleNextStep } = useAddPatientContext()

  const { handleSubmit, reset } = useFormContext()

  const CurrentStep = steps[currentStep]

  const {
    mutate,
    isError,
    data: igor,
  } = useMutation({
    mutationFn: async (data: Cliente) => {
      const res = await client.post("/clientes", {
        data,
      })

      return res
    },
    onError: (e) => {
      alert(e)
    },
    onSuccess: () => {
      handleNextStep()
      reset()
    },
  })

  const onSubmit = (data: any) => {
    mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CurrentStep />
    </form>
  )
}
