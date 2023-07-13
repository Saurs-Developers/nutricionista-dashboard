import Link from "next/link"
import { getServerSession } from "next-auth"

import { AvaliacaoResponse, Treino, TreinoResponse } from "@/@types/avaliacao"
import { Typography } from "@/components/shared/typography"
import { CreateWorkoutDialog } from "@/components/ui/dialogs/workout-dialog/create-workout"
import { WorkoutList } from "@/components/ui/workout-list"
import { nextAuthConfig } from "@/lib/auth"

export default async function Treinos({ params }: { params: { id: string } }) {
  const { id } = params
  const avaliacoes = await getAvaliacoes(id)

  if (avaliacoes.results.length === 0) {
    return (
      <div className="space-y-4 mt-4">
        <Typography>
          Para criar um treino, o paciente precisa de uma avaliação.
        </Typography>
        <Link
          className="block mt-4 underline"
          href={"/dashboard/clientes/" + id}
        >
          Criar avaliação
        </Link>
      </div>
    )
  }
  const treinos = await getTreinos(avaliacoes.results[0].id)

  return (
    <div className="space-y-4 mt-4">
      {treinos.results.length === 0 ? (
        <>
          <Typography>
            O paciente ainda não possui nenhum treino. Clique no botão abaixo
            para criar.
          </Typography>
          <CreateWorkoutDialog id={avaliacoes.results[0].id} />
        </>
      ) : (
        <>
          <CreateWorkoutDialog id={avaliacoes.results[0].id} />
          <WorkoutList data={avaliacoes.results[0].treinos} />
        </>
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

const getTreinos = async (id: string) => {
  const session = await getServerSession(nextAuthConfig)

  const res = await fetch(
    "http://localhost/api/v1/avaliacoes/" + id + "/treinos",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + session!.user.access_token,
      },
    },
  )

  const data: TreinoResponse = await res.json()

  return data
}
