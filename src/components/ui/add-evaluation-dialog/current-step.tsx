import { steps, useAddEvaluationContext } from "./add-evaluation-context"

export function CurrentStep() {
  const { currentStep } = useAddEvaluationContext()

  const CurrentStep = steps[currentStep]

  return <CurrentStep />
}
