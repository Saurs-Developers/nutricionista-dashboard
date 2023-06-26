import { steps, useFormSteps } from "./form-steps-context"

export function CurrentStep() {
  const { currentStep } = useFormSteps()

  const CurrentStep = steps[currentStep]

  return <CurrentStep />
}
