import Link from "next/link"

import { Table } from "@/components/shared/table"

export function PatientList() {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Nome</Table.HeadCell>
        <Table.HeadCell>Data de vencimento</Table.HeadCell>
        <Table.HeadCell>Cidade</Table.HeadCell>
        <Table.HeadCell>País</Table.HeadCell>
        <Table.HeadCell>Plano</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Link href="/dashboard/patient/12345" className="hover:underline">
              Samuel Luiz
            </Link>
          </Table.Cell>
          <Table.Cell>05 jun 2023</Table.Cell>
          <Table.Cell>Parnaíba, PI</Table.Cell>
          <Table.Cell>Brasil</Table.Cell>
          <Table.Cell>Basic</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Link href="/dashboard/patient/12345" className="hover:underline">
              Samuel Luiz
            </Link>
          </Table.Cell>
          <Table.Cell>05 jun 2023</Table.Cell>
          <Table.Cell>Parnaíba, PI</Table.Cell>
          <Table.Cell>Brasil</Table.Cell>
          <Table.Cell>Basic</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Link href="/dashboard/patient/12345" className="hover:underline">
              Samuel Luiz
            </Link>
          </Table.Cell>
          <Table.Cell>05 jun 2023</Table.Cell>
          <Table.Cell>Parnaíba, PI</Table.Cell>
          <Table.Cell>Brasil</Table.Cell>
          <Table.Cell>Basic</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Link href="/dashboard/patient/12345" className="hover:underline">
              Samuel Luiz
            </Link>
          </Table.Cell>
          <Table.Cell>05 jun 2023</Table.Cell>
          <Table.Cell>Parnaíba, PI</Table.Cell>
          <Table.Cell>Brasil</Table.Cell>
          <Table.Cell>Basic</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
