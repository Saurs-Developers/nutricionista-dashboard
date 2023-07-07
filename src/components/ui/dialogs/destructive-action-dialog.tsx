import { Trash2 } from "lucide-react"

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

interface Props {
  title: string
  description?: string
}

export function DestructiveActionDialog({ title, description }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button>
          <Trash2 className="text-destructive" size={24} />
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-[480] w-full">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex w-full gap-4 items-center">
          <AlertDialogAction className="flex-1">Sim</AlertDialogAction>
          <AlertDialogCancel className="flex-1">Não</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
