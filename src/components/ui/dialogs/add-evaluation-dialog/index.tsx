"use client"

import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Plus } from "lucide-react"

import { Button } from "@/components/shared/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/dialog"
import {
  AddEvaluationSchema,
  addEvaluationSchema,
} from "@/schemas/add_evaluation"

import { AddEvaluationContextProvider } from "./add-evaluation-context"
import { CurrentStep } from "./current-step"

export function AddEvaluationDialog() {
  const methods = useForm<AddEvaluationSchema>({
    resolver: zodResolver(addEvaluationSchema),
    mode: "onChange",
    defaultValues: {
      peso: null,
      altura: null,
      pressao_arterial: "",
      fc_repouso: null,
      objetivo: "",
      plano: "ULTIMATE",
      fator_atv_fisica: null,
      perimetro: {
        torax: null,
        cintura: null,
        abdominal: null,
        quadril: null,
        antebraco_e: null,
        antebraco_d: null,
        braco_e: null,
        braco_d: null,
        pescoco: null,
        ombro: null,
        coxa_e: null,
        coxa_d: null,
        panturrilha_e: null,
        panturrilha_d: null,
      },
      composicao_corporal: {
        coxa: null,
        abdomen: null,
        suprailiaca: null,
        peitoral: null,
        axilar_media: null,
        bicepital: null,
        tricipital: null,
        subescapular: null,
        opcional_1: null,
        opcional_2: null,
        panturrilha: null,
      },
    },
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Criar avaliação <Plus className="ml-2" size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[824px] w-full max-h-[586px] overflow-auto">
        <DialogHeader>
          <DialogTitle>Criar avaliação</DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <AddEvaluationContextProvider>
            <CurrentStep />
            <Button onClick={() => console.log(methods.getValues())}>
              values
            </Button>
            <Button onClick={() => console.log(methods.reset())}>reset</Button>
            <Button onClick={() => console.log(methods.formState.errors)}>
              errors
            </Button>
          </AddEvaluationContextProvider>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
