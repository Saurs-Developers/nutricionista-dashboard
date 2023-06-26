import { FormProvider, useForm } from "react-hook-form"
import { Plus } from "lucide-react"

import { Button } from "@/components/shared/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/dialog"

import { AddEvaluationContextProvider } from "./add-evaluation-context"
import { CurrentStep } from "./current-step"

export function AddEvaluationDialog() {
  const methods = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Criar avaliação <Plus className="ml-2" size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[824px] w-full max-h-[578px] overflow-auto">
        <DialogHeader>
          <DialogTitle>Criar avaliação</DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <AddEvaluationContextProvider>
              <CurrentStep />
            </AddEvaluationContextProvider>
            <Button type="submit">Enviar</Button>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
