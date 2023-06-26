import { useState } from "react"

// eslint-disable-next-line no-undef
export function useMultiStepForm(steps: (() => JSX.Element)[]) {
  const [currentStep, setCurrentStep] = useState(0)

  const stepCount = steps.length

  const handleNextStep = () => {
    if (currentStep < stepCount - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const returnCurrentStep = steps[currentStep]

  return {
    currentStep,
    totalSteps: stepCount,
    handleNextStep,
    handlePreviousStep,
    returnCurrentStep,
  }
}
