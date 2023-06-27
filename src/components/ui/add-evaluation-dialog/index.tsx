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
import { StepTwo } from "./step-2"
import { StepThree } from "./step-3"

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
      <DialogContent className="max-w-[824px] w-full max-h-[586px] overflow-auto">
        <DialogHeader>
          <DialogTitle>Criar avaliação</DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <AddEvaluationContextProvider>
              <CurrentStep />
            </AddEvaluationContextProvider>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
