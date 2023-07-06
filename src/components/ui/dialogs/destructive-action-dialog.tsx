import { ReactNode } from "react"
import { Eye, Trash2 } from "lucide-react"

import { Button } from "@/components/shared/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/dialog"

interface Props {
  title: string
  description?: string
}

export function DestructiveActionDialog({ title, description }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <Trash2 size={24} />
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-[480] w-full">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div>{description}</div>
        <div className="flex w-full gap-4 items-center">
          <Button className="flex-1" variant="destructive">
            Sim
          </Button>
          <Button className="flex-1" variant="default">
            Não
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
