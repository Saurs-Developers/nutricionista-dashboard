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
            <button onClick={() => console.log(methods.getValues())}>
              Valores
            </button>
          </AddEvaluationContextProvider>
          <Button onClick={() => console.log(methods.formState.errors)}>
            Erros
          </Button>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
