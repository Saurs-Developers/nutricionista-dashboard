"use client"

import { useState } from "react"
import { Eye } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/dialog"

import { ExerciseList } from "./exercice-list"

export function WorkoutDialog() {
  const [editMode, setEditMode] = useState(false)

  const handleToggleEditMode = () => {
    setEditMode((prev) => !prev)
  }

  return (
    <Dialog
      onOpenChange={() => {
        editMode === true && setEditMode(false)
      }}
    >
      <DialogTrigger asChild>
        <button>
          <Eye size={24} />
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-[1280px] w-full max-h-[648px] overflow-auto">
        <DialogHeader>
          {editMode ? (
            <DialogTitle>Treino A - Editar</DialogTitle>
          ) : (
            <DialogTitle>Treino A</DialogTitle>
          )}
        </DialogHeader>
        <ExerciseList toggleEditMode={handleToggleEditMode} />
      </DialogContent>
    </Dialog>
  )
}
