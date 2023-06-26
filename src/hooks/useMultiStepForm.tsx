import { ReactNode, useState } from "react"

export function useMultiStepForm(steps: ReactNode[]) {
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

  const handleResetSteps = () => {
    setCurrentStep(0)
  }

  const returnCurrentStep = () => {
    const Step = steps[currentStep]

    return Step
  }

  return {
    currentStep,
    totalSteps: stepCount,
    handleNextStep,
    handlePreviousStep,
    handleResetSteps,
    returnCurrentStep,
  }
}
