"use client"

import React, { createContext, ReactNode, useContext } from "react"

import { useMultiStepForm } from "@/hooks/useMultiStepForm"

import { StepOne } from "./step-1"
import { StepTwo } from "./step-2"
import { StepThree } from "./step-3"

interface AddEvaluationContext {
  // eslint-disable-next-line no-undef
  returnCurrentStep: () => JSX.Element
  handleNextStep: () => void
  handlePreviousStep: () => void
  currentStep: number
}

export const addEvaluationContext = createContext({} as AddEvaluationContext)

export const steps = [StepOne, StepTwo, StepThree]

export function AddEvaluationContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const { currentStep, handleNextStep, handlePreviousStep, returnCurrentStep } =
    useMultiStepForm(steps)

  return (
    <addEvaluationContext.Provider
      value={{
        returnCurrentStep,
        currentStep,
        handleNextStep,
        handlePreviousStep,
      }}
    >
      {children}
    </addEvaluationContext.Provider>
  )
}

export const useAddEvaluationContext = () => {
  const context = useContext(addEvaluationContext)

  if (context === undefined) {
    throw new Error("useFormSteps must be used within a FormStepsProvider")
  }

  const { handleNextStep, handlePreviousStep, returnCurrentStep, currentStep } =
    context

  return { handleNextStep, handlePreviousStep, returnCurrentStep, currentStep }
}
