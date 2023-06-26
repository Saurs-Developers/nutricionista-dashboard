"use client"

import React, { createContext, ReactNode, useContext } from "react"

import { useMultiStepForm } from "@/hooks/useMultiStepForm"

import { StepOne } from "./step-1"
import { StepTwo } from "./step-2"
import { StepThree } from "./step-3"

interface AddPatientContext {
  // eslint-disable-next-line no-undef
  returnCurrentStep: () => JSX.Element
  handleNextStep: () => void
  handlePreviousStep: () => void
  currentStep: number
}

export const addPatientContext = createContext({} as AddPatientContext)

export const steps = [StepOne, StepTwo, StepThree]

export function PatientContextProvider({ children }: { children: ReactNode }) {
  const { currentStep, handleNextStep, handlePreviousStep, returnCurrentStep } =
    useMultiStepForm(steps)

  return (
    <addPatientContext.Provider
      value={{
        returnCurrentStep,
        currentStep,
        handleNextStep,
        handlePreviousStep,
      }}
    >
      {children}
    </addPatientContext.Provider>
  )
}

export const useAddPatientContext = () => {
  const context = useContext(addPatientContext)

  if (context === undefined) {
    throw new Error("useFormSteps must be used within a FormStepsProvider")
  }

  const { handleNextStep, handlePreviousStep, returnCurrentStep, currentStep } =
    context

  return { handleNextStep, handlePreviousStep, returnCurrentStep, currentStep }
}
