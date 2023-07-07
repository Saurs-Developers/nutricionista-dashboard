import { Eye } from "lucide-react"
import { Trash2 } from "lucide-react"
import Link from "next/link"

import { Table } from "@/components/shared/table"
import { AddWorkoutDialog } from "@/components/ui/dialogs/add-workout-dialog"

import { DestructiveActionDialog } from "./dialogs/destructive-action-dialog"
import { WorkoutDialog } from "./dialogs/workout-dialog"

export function PatientWorkouts() {
  return (
    <div className="mt-6">
      <AddWorkoutDialog />
      <Table>
        <Table.Head>
          <Table.HeadCell>Nome</Table.HeadCell>
          <Table.HeadCell>Data da semana</Table.HeadCell>
          <Table.HeadCell>Foco</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Treino A</Table.Cell>
            <Table.Cell>Segunda, Quinta</Table.Cell>
            <Table.Cell>Quadríceps</Table.Cell>
            <Table.Cell className="flex items-center gap-4">
              <WorkoutDialog />
              <DestructiveActionDialog
                title="Excluir treino"
                description="Você realmente deseja excluir este treino?"
              />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Treino A</Table.Cell>
            <Table.Cell>Segunda, Quinta</Table.Cell>
            <Table.Cell>Quadríceps</Table.Cell>
            <Table.Cell className="flex items-center gap-4">
              <WorkoutDialog />
              <DestructiveActionDialog
                title="Excluir treino"
                description="Você realmente deseja excluir este treino?"
              />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Treino A</Table.Cell>
            <Table.Cell>Segunda, Quinta</Table.Cell>
            <Table.Cell>Quadríceps</Table.Cell>
            <Table.Cell className="flex items-center gap-4">
              <WorkoutDialog />
              <DestructiveActionDialog
                title="Excluir treino"
                description="Você realmente deseja excluir este treino?"
              />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Treino A</Table.Cell>
            <Table.Cell>Segunda, Quinta</Table.Cell>
            <Table.Cell>Quadríceps</Table.Cell>
            <Table.Cell className="flex items-center gap-4">
              <WorkoutDialog />
              <DestructiveActionDialog
                title="Excluir treino"
                description="Você realmente deseja excluir este treino?"
              />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}
