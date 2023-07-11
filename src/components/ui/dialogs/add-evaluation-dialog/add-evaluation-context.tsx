"use client"

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

import { toast } from "@/components/shared/use-toast"
import { useMultiStepForm } from "@/hooks/useMultiStepForm"
import { AddEvaluationSchema } from "@/schemas/add_evaluation"
import { client } from "@/utils/api"

import { StepOne } from "./step-1"
import { StepTwo } from "./step-2"
import { StepThree } from "./step-3"

interface AddEvaluationContext {
  // eslint-disable-next-line no-undef
  returnCurrentStep: () => JSX.Element
  handleNextStep: () => void
  handlePreviousStep: () => void
  currentStep: number
  waterConsumption: number
  setWaterConsumption: Dispatch<SetStateAction<number>>
  submitAvaliacao: ({
    data,
    id,
  }: {
    data: AddEvaluationSchema
    id: string
  }) => void
  isSubmitLoading: boolean
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

  const [waterConsumption, setWaterConsumption] = useState(0)

  const router = useRouter()

  const { mutate: submitAvaliacao, isLoading: isSubmitLoading } = useMutation({
    mutationFn: async ({
      data,
      id,
    }: {
      data: AddEvaluationSchema
      id: string
    }) => {
      const res = await client.post(
        "/clientes",
        {
          data,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-uri": "/v1/clientes/" + id + "/avaliacoes",
          },
        },
      )

      return res
    },
    onError: (e) => {
      toast({
        title: "Ocorreu um erro ao cadastrar a avaliação.",
        description:
          "Se o erro persistir, contate um administrador. Mensagem: " + e,
      })
      setWaterConsumption(0)
    },
    onSuccess: () => {
      toast({
        title: "Avaliação cadastrada com sucesso!",
        description:
          "A avaliação foi cadastrada com sucesso, redirecionando em 3 segundos...",
      })
      setTimeout(() => {
        router.refresh()
        console.log("EAE")
      }, 3000)
    },
  })

  return (
    <addEvaluationContext.Provider
      value={{
        submitAvaliacao,
        isSubmitLoading,
        waterConsumption,
        setWaterConsumption,
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

  const {
    isSubmitLoading,
    submitAvaliacao,
    handleNextStep,
    handlePreviousStep,
    returnCurrentStep,
    currentStep,
    waterConsumption,
    setWaterConsumption,
  } = context

  return {
    isSubmitLoading,
    submitAvaliacao,
    handleNextStep,
    handlePreviousStep,
    returnCurrentStep,
    currentStep,
    waterConsumption,
    setWaterConsumption,
  }
}
