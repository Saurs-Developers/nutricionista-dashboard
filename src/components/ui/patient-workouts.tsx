import { Eye } from "lucide-react"
import { Trash2 } from "lucide-react"
import Link from "next/link"

import { Table } from "@/components/shared/table"
import { AddWorkoutDialog } from "@/components/ui/dialogs/add-workout-dialog"

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
            <Table.Cell>
              <Link href="/dashboard/patient/12345" className="hover:underline">
                Treino A
              </Link>
            </Table.Cell>
            <Table.Cell>Segunda, Quinta</Table.Cell>
            <Table.Cell>Quadríceps</Table.Cell>
            <Table.Cell className="flex items-center gap-4">
              <Eye />
              <Trash2 className="text-red-500" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Link href="/dashboard/patient/12345" className="hover:underline">
                Treino A
              </Link>
            </Table.Cell>
            <Table.Cell>Segunda, Quinta</Table.Cell>
            <Table.Cell>Quadríceps</Table.Cell>
            <Table.Cell className="flex items-center gap-4">
              <Eye />
              <Trash2 className="text-red-500" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Link href="/dashboard/patient/12345" className="hover:underline">
                Treino A
              </Link>
            </Table.Cell>
            <Table.Cell>Segunda, Quinta</Table.Cell>
            <Table.Cell>Quadríceps</Table.Cell>
            <Table.Cell className="flex items-center gap-4">
              <Eye />
              <Trash2 className="text-red-500" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Link href="/dashboard/patient/12345" className="hover:underline">
                Treino A
              </Link>
            </Table.Cell>
            <Table.Cell>Segunda, Quinta</Table.Cell>
            <Table.Cell>Quadríceps</Table.Cell>
            <Table.Cell className="flex items-center gap-4">
              <Eye />
              <button>
                <Trash2 className="text-red-500" />
              </button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}
