import { headers } from "next/headers"

import { ClientesResponse } from "@/@types/clientes"
import { Pagination } from "@/components/shared/pagination"
import { Typography } from "@/components/shared/typography"
import { PatientList } from "@/components/ui/patient-list"
import { PatientsNavBar } from "@/components/ui/patients-navbar"

export default async function Dashboard({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  const estados = await getEstados()
  const res = await fetch("http://localhost:3000/api/clientes?page=" + id, {
    headers: headers(),
  })

  const clientes: ClientesResponse = await res.json()

  console.log(clientes)

  return (
    <div>
      <Typography weight="bold" variant="h2">
        Pacientes
      </Typography>
      <PatientsNavBar states={estados} />
      {clientes.results.length > 0 ? (
        <PatientList data={clientes.results} />
      ) : (
        <Typography variant="body" className="mt-5">
          Você não possui nenhum paciente cadastrado.
        </Typography>
      )}
      <Pagination
        currentPage={clientes.current_page}
        lastPage={clientes.total_pages}
      />
    </div>
  )
}

const getClientes = async (id: number) => {
  const res = await fetch("http://localhost:3000/api/clientes?page=" + id, {
    headers: headers(),
  })

  const data = await res.json()

  return data
}

const getEstados = async () => {
  const res = await fetch(
    "http://servicodados.ibge.gov.br/api/v1/localidades/estados",
  )

  const data = await res.json()

  return data
}
