import { useFormContext } from "react-hook-form"

import { steps, useAddPatientContext } from "./add-patient-context"

export function CurrentStep() {
  const { currentStep, handleNextStep } = useAddPatientContext()

  const { handleSubmit, reset } = useFormContext()

  const CurrentStep = steps[currentStep]

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CurrentStep />
    </form>
  )
}
