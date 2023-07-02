import { steps, useAddWorkoutContext } from "./add-workout-context"

export function CurrentStep() {
  const { currentStep } = useAddWorkoutContext()

  const CurrentStep = steps[currentStep]

  return <CurrentStep />
}
