"use client"

import React, { createContext, ReactNode, useContext } from "react"

import { useMultiStepForm } from "@/hooks/useMultiStepForm"

import { StepOne } from "./step-1"
import { StepTwo } from "./step-2"

interface AddWorkoutContext {
  // eslint-disable-next-line no-undef
  returnCurrentStep: () => JSX.Element
  handleNextStep: () => void
  handlePreviousStep: () => void
  currentStep: number
}

export const addWorkoutContext = createContext({} as AddWorkoutContext)

export const steps = [StepOne, StepTwo]

export function AddWorkoutContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const { currentStep, handleNextStep, handlePreviousStep, returnCurrentStep } =
    useMultiStepForm(steps)

  return (
    <addWorkoutContext.Provider
      value={{
        returnCurrentStep,
        currentStep,
        handleNextStep,
        handlePreviousStep,
      }}
    >
      {children}
    </addWorkoutContext.Provider>
  )
}

export const useAddWorkoutContext = () => {
  const context = useContext(addWorkoutContext)

  if (context === undefined) {
    throw new Error(
      "useAddWorkoutContext must be used within a FormStepsProvider",
    )
  }

  const { handleNextStep, handlePreviousStep, returnCurrentStep, currentStep } =
    context

  return { handleNextStep, handlePreviousStep, returnCurrentStep, currentStep }
}
