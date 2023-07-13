import { getServerSession } from "next-auth"

import { PatientData } from "@/components/ui/patient-data"
import { nextAuthConfig } from "@/lib/auth"

export default async function Dados({ params }: { params: { id: number } }) {
  const { id } = params

  const cliente = await getCliente(id)

  return <PatientData cliente={cliente} />
}

const getCliente = async (id: number) => {
  const session = await getServerSession(nextAuthConfig)

  const res = await fetch("http://localhost:3000/api/proxy", {
    headers: {
      "Content-Type": "application/json",
      "x-api-uri": "/v1/clientes/" + id,
      Authorization: "Bearer " + session!.user.access_token,
    },
  })

  const data = await res.json()

  return data
}
