import { getServerSession } from "next-auth"

import { AvaliacaoResponse } from "@/@types/avaliacao"
import { Typography } from "@/components/shared/typography"
import { AddEvaluationDialog } from "@/components/ui/dialogs/add-evaluation-dialog"
import { EvaluationContent } from "@/components/ui/evaluation-content"
import { nextAuthConfig } from "@/lib/auth"

export default async function Evaluation({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  const data = await getAvaliacoes(id)
  const cliente = await getCliente(id)

  return (
    <div className="space-y-4 mt-4">
      {data.results.length === 0 ? (
        <>
          <Typography>
            O paciente ainda não possui nenhuma avaliação. Para criar uma,
            utilize o botão abaixo.
          </Typography>
          <AddEvaluationDialog />
        </>
      ) : (
        <EvaluationContent cliente={cliente} evaluation={data.results[0]} />
      )}
    </div>
  )
}

const getAvaliacoes = async (id: string) => {
  const session = await getServerSession(nextAuthConfig)

  const res = await fetch(
    "http://localhost/api/v1/clientes/" + id + "/avaliacoes",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + session!.user.access_token,
      },
    },
  )

  const data: AvaliacaoResponse = await res.json()

  return data
}

const getCliente = async (id: string) => {
  const session = await getServerSession(nextAuthConfig)

  const res = await fetch("http://localhost/api/v1/clientes/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + session!.user.access_token,
    },
  })

  const data = await res.json()

  return data
}
