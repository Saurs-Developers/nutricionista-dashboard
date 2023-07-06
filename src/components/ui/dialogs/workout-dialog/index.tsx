import { Eye } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/dialog"

export function WorkoutDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <Eye size={24} />
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-[1024px] w-full max-h-[648px] overflow-auto">
        <DialogHeader>
          <DialogTitle>Criar treino</DialogTitle>
        </DialogHeader>
        <div>View and edit workout</div>
      </DialogContent>
    </Dialog>
  )
}
