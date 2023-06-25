"use client"

import { Table } from "@/components/shared/table"
import { Typography } from "@/components/shared/typography"
import { PatientsNavBar } from "@/components/ui/patients-navbar"

export default function Dashboard() {
  return (
    <div>
      <Typography weight="bold" variant="h2">
        Pacientes
      </Typography>
      <PatientsNavBar />
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
            <Table.Cell leftBorder>
              <a href="#" className="hover:underline">
                Samuel Luiz
              </a>
            </Table.Cell>
            <Table.Cell>05 jun 2023</Table.Cell>
            <Table.Cell>Parnaíba, PI</Table.Cell>
            <Table.Cell>Brasil</Table.Cell>
            <Table.Cell rightBorder>Basic</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell leftBorder>
              <a href="#" className="hover:underline">
                Samuel Luiz
              </a>
            </Table.Cell>
            <Table.Cell>05 jun 2023</Table.Cell>
            <Table.Cell>Parnaíba, PI</Table.Cell>
            <Table.Cell>Brasil</Table.Cell>
            <Table.Cell rightBorder>Basic</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell leftBorder>
              <a href="#" className="hover:underline">
                Samuel Luiz
              </a>
            </Table.Cell>
            <Table.Cell>05 jun 2023</Table.Cell>
            <Table.Cell>Parnaíba, PI</Table.Cell>
            <Table.Cell>Brasil</Table.Cell>
            <Table.Cell rightBorder>Basic</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell leftBorder>
              <a href="#" className="hover:underline">
                Samuel Luiz
              </a>
            </Table.Cell>
            <Table.Cell>05 jun 2023</Table.Cell>
            <Table.Cell>Parnaíba, PI</Table.Cell>
            <Table.Cell>Brasil</Table.Cell>
            <Table.Cell rightBorder>Basic</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell leftBorder>
              <a href="#" className="hover:underline">
                Samuel Luiz
              </a>
            </Table.Cell>
            <Table.Cell>05 jun 2023</Table.Cell>
            <Table.Cell>Parnaíba, PI</Table.Cell>
            <Table.Cell>Brasil</Table.Cell>
            <Table.Cell rightBorder>Basic</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell leftBorder>
              <a href="#" className="hover:underline">
                Samuel Luiz
              </a>
            </Table.Cell>
            <Table.Cell>05 jun 2023</Table.Cell>
            <Table.Cell>Parnaíba, PI</Table.Cell>
            <Table.Cell>Brasil</Table.Cell>
            <Table.Cell rightBorder>Basic</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}
