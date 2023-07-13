"use client"

import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/shared/alert-dialog"
import { toast } from "@/components/shared/use-toast"
import { client } from "@/utils/api"

interface Props {
  workout: string
  id: string
}

export function DeleteWorkout({ workout, id }: Props) {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      const res = await client.delete("/proxy", {
        headers: {
          "Content-Type": "application/json",
          "x-api-uri": "/v1/treinos/" + id,
        },
      })

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

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <button>
          <Trash2 className="text-destructive" size={24} />
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-[480] w-full">
        <AlertDialogHeader>
          <AlertDialogTitle>Excluir treino</AlertDialogTitle>
          <AlertDialogDescription>
            Você realmente deseja excluir: <b>{workout}</b>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex w-full gap-4 items-center">
          <AlertDialogAction
            onClick={() => mutate()}
            disabled={isLoading}
            className="flex-1"
          >
            Sim
          </AlertDialogAction>
          <AlertDialogCancel disabled={isLoading} className="flex-1">
            Não
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
