import { Suspense } from "react"
import { getServerSession } from "next-auth"

import { Pagination } from "@/components/shared/pagination"
import { Typography } from "@/components/shared/typography"
import { PatientList } from "@/components/ui/patient-list"
import { PatientsNavBar } from "@/components/ui/patients-navbar"
import { nextAuthConfig } from "@/lib/auth"

interface Props {
  searchParams: { [key: string]: string | string[] | undefined }
  params: { id: number }
}

export default async function Dashboard({ searchParams, params }: Props) {
  const { page } = searchParams
  const { estado } = searchParams
  const { nome } = searchParams

  const clientesData = await getClientes(
    Number(page) - 1,
    estado as string,
    nome as string,
  )

  const estadosData = getEstados()

  const [clientes, estados] = await Promise.all([clientesData, estadosData])

  return (
    <div>
      <Typography weight="bold" variant="h2">
        Pacientes
      </Typography>
      <PatientsNavBar states={estados} />
      {clientes.results.length > 0 ? (
        <>
          <PatientList data={clientes.results} />
          <Pagination
            currentPage={clientes.current_page + 1}
            lastPage={clientes.total_pages}
          />
        </>
      ) : (
        <Typography variant="body" className="mt-5">
          Você não possui nenhum paciente cadastrado.
        </Typography>
      )}
    </div>
  )
}

const getClientes = async (page: number, estado: string, nome: string) => {
  const session = await getServerSession(nextAuthConfig)

  const apiUri =
    "/v1/clientes/profissionais/" +
    session!.user.user_id +
    "?page=" +
    page +
    "&size=6&orderBy=createdAt"

  const res = await fetch("http://localhost/api" + apiUri, {
    headers: {
      Authorization: "Bearer " + session!.user.access_token,
    },
    cache: "force-cache",
  })

  return res.json()
}

const getEstados = async () => {
  const res = await fetch(
    "http://servicodados.ibge.gov.br/api/v1/localidades/estados",
    {
      cache: "default",
    },
  )

  return res.json()
}
