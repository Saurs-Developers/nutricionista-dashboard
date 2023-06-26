"use client"

import React, { createContext, ReactNode, useContext, useState } from "react"

import { StepOne } from "./step-1"
import { StepTwo } from "./step-2"
import { StepThree } from "./step-3"

interface FormStepsContext {
  // eslint-disable-next-line no-undef
  returnCurrentStep: () => JSX.Element
  handleNextStep: () => void
  handlePreviousStep: () => void
  currentStep: number
}

export const formStepsContext = createContext({} as FormStepsContext)

export const steps = [StepOne, StepTwo, StepThree]

export function FormStepsProvider({ children }: { children: ReactNode }) {
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

  return (
    <formStepsContext.Provider
      value={{
        returnCurrentStep,
        currentStep,
        handleNextStep,
        handlePreviousStep,
      }}
    >
      {children}
    </formStepsContext.Provider>
  )
}

export const useFormSteps = () => {
  const context = useContext(formStepsContext)

  if (context === undefined) {
    throw new Error("useFormSteps must be used within a FormStepsProvider")
  }

  const { handleNextStep, handlePreviousStep, returnCurrentStep, currentStep } =
    context

  return { handleNextStep, handlePreviousStep, returnCurrentStep, currentStep }
}
