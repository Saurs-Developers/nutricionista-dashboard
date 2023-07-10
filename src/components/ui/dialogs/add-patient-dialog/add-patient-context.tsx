"use client"

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react"
import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"

import { District, State } from "@/@types"
import { Cliente } from "@/@types/clientes"
import { toast } from "@/components/shared/use-toast"
import { useMultiStepForm } from "@/hooks/useMultiStepForm"
import { client } from "@/lib/axios"

import { StepOne } from "./step-1"
import { StepTwo } from "./step-2"
import { StepThree } from "./step-3"

interface AddPatientContext {
  // eslint-disable-next-line no-undef
  returnCurrentStep: () => JSX.Element
  handleNextStep: () => void
  handlePreviousStep: () => void
  currentStep: number
  uf: string
  setUf: Dispatch<SetStateAction<string>>
  cidades?: District[]
  estados?: State[]
  isCidadesLoading?: boolean
  submitCliente: (data: Cliente) => void
  isSubmitLoading: boolean
}

export const addPatientContext = createContext({} as AddPatientContext)

export const steps = [StepOne, StepTwo, StepThree]

export function PatientContextProvider({ children }: { children: ReactNode }) {
  const { currentStep, handleNextStep, handlePreviousStep, returnCurrentStep } =
    useMultiStepForm(steps)

  const [uf, setUf] = useState("")

  const { data: estados, isLoading: isEstadosLoading } = useQuery<State[]>({
    queryKey: ["states"],
    queryFn: async () => {
      const states = await axios.get(
        "http://servicodados.ibge.gov.br/api/v1/localidades/estados",
      )

      const data = await states.data

      return data
    },
  })

  const { data: cidades, isLoading: isCidadesLoading } = useQuery<District[]>({
    queryKey: ["cities", uf],
    queryFn: async () => {
      const cidades = await axios.get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" +
          uf +
          "/municipios",
      )

      const data = await cidades.data

      return data
    },
    cacheTime: Infinity,
  })

  const { mutate: submitCliente, isLoading: isSubmitLoading } = useMutation({
    mutationFn: async (data: Cliente) => {
      const res = await client.post("/clientes", {
        data,
      })

      return res
    },
    onError: (e) => {
      toast({
        title: "Ocorreu um erro ao cadastrar o paciente.",
        description:
          "Se o erro persistir, contate um administrador. Mensagem: " + e,
      })
    },
    onSuccess: () => {
      handleNextStep()
    },
  })

  return (
    <addPatientContext.Provider
      value={{
        submitCliente,
        isSubmitLoading,
        uf,
        isCidadesLoading,
        setUf,
        estados,
        cidades,
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

  const {
    handleNextStep,
    submitCliente,
    isSubmitLoading,
    handlePreviousStep,
    returnCurrentStep,
    currentStep,
    cidades,
    estados,
    uf,
    setUf,
    isCidadesLoading,
  } = context

  return {
    handleNextStep,
    submitCliente,
    isSubmitLoading,
    handlePreviousStep,
    returnCurrentStep,
    currentStep,
    cidades,
    estados,
    uf,
    setUf,
    isCidadesLoading,
  }
}
