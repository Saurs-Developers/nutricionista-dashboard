"use client"

import { useFormContext } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

import { AddPatientSchema } from "@/schemas/add_patient"

import { steps, useAddPatientContext } from "./add-patient-context"

export function CurrentStep() {
  const { currentStep, submitCliente, handleNextStep } = useAddPatientContext()

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/login")
    },
  })

  const router = useRouter()

  const { handleSubmit, reset } = useFormContext<AddPatientSchema>()

  const CurrentStep = steps[currentStep]

  const submit = async (data: AddPatientSchema) => {
    const res = await fetch(process.env.NEXT_PUBLIC_HANDLER_URL + "/proxy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + session!.user.access_token,
        Accept: "application/json",
        "x-api-uri": "/v1/clientes",
      },
      body: JSON.stringify(data),
    })

    const cliente_res = await res.json()

    return cliente_res
  }

  const onSubmit = async (data: AddPatientSchema) => {
    const res = await submit(data)

    if (res) {
      handleNextStep()
      setTimeout(() => {
        router.refresh()
      }, 5000)
    }

    console.log(res)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CurrentStep />
    </form>
  )
}
