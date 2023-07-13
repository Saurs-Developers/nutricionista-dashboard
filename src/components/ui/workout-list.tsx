import { GetTreino } from "@/@types/avaliacao"
import { Table } from "@/components/shared/table"
import { WeekDay, weekdayChooser } from "@/utils/weekdays"

import { DeleteWorkout } from "./dialogs/workout-dialog/delete-workout"

export function WorkoutList({ data }: { data: GetTreino[] }) {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Nome</Table.HeadCell>
        <Table.HeadCell>Dias da semana</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {data.map((treino) => {
          return (
            <Table.Row key={treino.id}>
              <Table.Cell>{treino.titulo}</Table.Cell>
              <Table.Cell>
                {weekdayChooser(treino.dias as WeekDay[])}
              </Table.Cell>
              <Table.Cell className="flex items-center gap-4">
                <DeleteWorkout id={treino.id} workout={treino.titulo} />
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}
