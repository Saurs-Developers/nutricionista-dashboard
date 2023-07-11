"use client"

import { useFormContext } from "react-hook-form"
import { useParams, useRouter } from "next/navigation"

import { AddEvaluationSchema } from "@/schemas/add_evaluation"

import { steps, useAddEvaluationContext } from "./add-evaluation-context"

export function CurrentStep() {
  const { currentStep, submitAvaliacao } = useAddEvaluationContext()
  const { handleSubmit, reset } = useFormContext<AddEvaluationSchema>()

  const params = useParams()

  const id = params!.id as string

  const CurrentStep = steps[currentStep]

  const onSubmit = (data: AddEvaluationSchema) => {
    submitAvaliacao({ data, id })
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CurrentStep />
    </form>
  )
}
