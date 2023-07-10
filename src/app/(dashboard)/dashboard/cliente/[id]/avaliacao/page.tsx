import { headers } from "next/headers"

import { AvaliacaoResponse } from "@/@types/avaliacao"
import { Typography } from "@/components/shared/typography"
import { AddEvaluationDialog } from "@/components/ui/dialogs/add-evaluation-dialog"

export default async function Evaluation({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  const data = await getAvaliacoes(id)

  console.log(data)

  return (
    <div className="space-y-4 mt-4">
      <Typography>
        O paciente ainda não possui nenhuma avaliação. Para criar uma, utilize o
        botão abaixo.
      </Typography>
      <AddEvaluationDialog />
    </div>
  )
}

const getAvaliacoes = async (id: string) => {
  const apiUri = "/v1/clientes/" + id + "/avaliacoes"

  const headersInstance = headers()
  const headerCollection = new Headers(headersInstance)
  headerCollection.append("x-api-uri", apiUri)

  const res = await fetch("http://localhost:3000/api/clientes", {
    headers: headerCollection,
  })

  const data: AvaliacaoResponse = await res.json()

  return data
}
