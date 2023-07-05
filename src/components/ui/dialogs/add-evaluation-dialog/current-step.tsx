import { useFormContext } from "react-hook-form"

import { AddEvaluationSchema } from "@/schemas/add_evaluation"

import { steps, useAddEvaluationContext } from "./add-evaluation-context"

export function CurrentStep() {
  const { currentStep } = useAddEvaluationContext()
  const { handleSubmit } = useFormContext<AddEvaluationSchema>()

  const CurrentStep = steps[currentStep]

  const onSubmit = (data: AddEvaluationSchema) => {
    console.log(data)
    console.log(JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CurrentStep />
    </form>
  )
}
