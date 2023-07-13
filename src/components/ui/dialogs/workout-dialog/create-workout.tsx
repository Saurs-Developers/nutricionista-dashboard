"use client"

import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { Dumbbell } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/shared/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/dialog"
import { toast } from "@/components/shared/use-toast"
import { AddWorkoutSchema, addWorkoutSchema } from "@/schemas/add_workout"
import { client } from "@/utils/api"

import { CreateWorkoutForm } from "../../create-workout-form"

export function CreateWorkoutDialog({ id }: { id: string }) {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  const methods = useForm<AddWorkoutSchema>({
    resolver: zodResolver(addWorkoutSchema),
    defaultValues: {
      dias: [],
    },
    mode: "onChange",
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: async ({
      data,
      id,
    }: {
      data: AddWorkoutSchema
      id: string
    }) => {
      const res = await client.post(
        "/proxy",
        {
          ...data,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-uri": "/v1/avaliacoes/" + id + "/treinos",
          },
        },
      )

      return res
    },
    onError: (e) => {
      toast({
        title: "Ocorreu um erro ao cadastrar o treino.",
        description:
          "Se o erro persistir, contate um administrador. Mensagem: " + e,
      })
    },
    onSuccess: () => {
      router.refresh()
      setIsOpen(false)
    },
  })

  const onSubmit = (data: AddWorkoutSchema) => {
    mutate({ data, id })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="default">
          Criar treino <Dumbbell className="ml-3" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[824px] w-full max-h-[648px] overflow-auto">
        <DialogHeader>
          <DialogTitle>Criar treino</DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <CreateWorkoutForm isLoading={isLoading} />
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
