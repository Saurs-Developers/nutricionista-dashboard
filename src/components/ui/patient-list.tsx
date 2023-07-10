import format from "date-fns/format"
import { ptBR } from "date-fns/locale"
import Link from "next/link"

import { Cliente } from "@/@types/clientes"
import { Table } from "@/components/shared/table"

export function PatientList({ data }: { data: Cliente[] }) {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Nome</Table.HeadCell>
        <Table.HeadCell>Data de nascimento</Table.HeadCell>
        <Table.HeadCell>Estado</Table.HeadCell>
        <Table.HeadCell>País</Table.HeadCell>
        <Table.HeadCell>Status</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {data.map((cliente) => {
          return (
            <Table.Row key={cliente.id}>
              <Table.Cell>
                <Link
                  href={"/dashboard/cliente/" + cliente.id + "/avaliacao"}
                  className="hover:underline"
                >
                  {cliente.nome}
                </Link>
              </Table.Cell>
              <Table.Cell>
                {format(new Date(cliente.data_nascimento), "PPP", {
                  locale: ptBR,
                })}
              </Table.Cell>
              <Table.Cell>{cliente.estado}</Table.Cell>
              <Table.Cell>Brasil</Table.Cell>
              <Table.Cell className="capitalize">
                {cliente.status.toLocaleLowerCase()}
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}
