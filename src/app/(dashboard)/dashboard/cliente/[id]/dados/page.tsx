import { ReactNode } from "react"
import { headers } from "next/headers"

import { PatientData } from "@/components/ui/patient-data"

interface Props {
  children: ReactNode
  params: { id: number }
}

export default async function Dados({ params }: Props) {
  const { id } = params

  const cliente = await getCliente(id)

  return <PatientData cliente={cliente} />
}

const getCliente = async (id: number) => {
  const headersInstance = headers()

  const headerCollection = new Headers(headersInstance)

  headerCollection.append("x-api-uri", "/v1/clientes/" + id)

  const res = await fetch("http://localhost:3000/api/clientes", {
    headers: headerCollection,
  })

  const data = await res.json()

  return data
}
