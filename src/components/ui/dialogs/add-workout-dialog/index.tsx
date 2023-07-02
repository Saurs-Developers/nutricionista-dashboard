"use client"

import { FormProvider, useForm } from "react-hook-form"
import { Dumbbell } from "lucide-react"

import { Button } from "@/components/shared/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/dialog"

import { AddWorkoutContextProvider } from "./add-workout-context"
import { CurrentStep } from "./current-step"

export function AddWorkoutDialog() {
  const methods = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          Criar treino <Dumbbell className="ml-3" />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-[1024px] w-full max-h-[648px] overflow-auto">
        <DialogHeader>
          <DialogTitle>Criar treino</DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <AddWorkoutContextProvider>
              <CurrentStep />
            </AddWorkoutContextProvider>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
