import { getServerSession } from "next-auth"

import { Pagination } from "@/components/shared/pagination"
import { Typography } from "@/components/shared/typography"
import { PatientList } from "@/components/ui/patient-list"
import { nextAuthConfig } from "@/lib/auth"

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

const getClientes = async (id: number, estado: string, nome: string) => {
  const session = await getServerSession(nextAuthConfig)

  const apiUri =
    "/v1/clientes/profissionais/" +
    session!.user.user_id +
    "?page=" +
    id +
    "&size=6&orderBy=createdAt"

  const res = await fetch("http://localhost/api" + apiUri, {
    headers: {
      Authorization: "Bearer " + session!.user.access_token,
    },
    cache: "force-cache",
  })

  return res.json()
}
