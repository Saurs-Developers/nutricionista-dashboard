import { headers } from "next/headers"

import { ClientesResponse } from "@/@types/clientes"
import { Pagination } from "@/components/shared/pagination"
import { Typography } from "@/components/shared/typography"
import { PatientList } from "@/components/ui/patient-list"

interface Props {
  searchParams: { [key: string]: string | string[] | undefined }
  params: { id: number }
}

export default async function Dashboard({ searchParams, params }: Props) {
  const { id } = params
  const { estado } = searchParams
  const { nome } = searchParams

  const clientes = await getClientes(id - 1, estado as string, nome as string)

  return (
    <div>
      {clientes.results.length > 0 ? (
        <PatientList data={clientes.results} />
      ) : (
        <Typography variant="body" className="mt-5">
          Você não possui nenhum paciente cadastrado.
        </Typography>
      )}
      <Pagination
        currentPage={clientes.current_page + 1}
        lastPage={clientes.total_pages}
      />
    </div>
  )
}

const getClientes = async (id: number, estado: string, nome: string) => {
  const res = await fetch(
    "http://localhost:3000/api/clientes?page=" +
      id +
      "&estado=" +
      estado +
      "&nome=" +
      nome,
    {
      headers: headers(),
      cache: "no-store",
      next: {
        tags: ["clientes"],
      },
    },
  )

  const clientes: ClientesResponse = await res.json()

  return clientes
}
