import { steps, useAddPatientContext } from "./add-patient-context"

export function CurrentStep() {
  const { currentStep } = useAddPatientContext()

  const CurrentStep = steps[currentStep]

  return <CurrentStep />
}
