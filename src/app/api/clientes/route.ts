import { cookies } from "next/headers"
import { NextResponse } from "next/server"

import { parseJwt } from "@/lib/utils"

export async function GET(req: Request) {
  const cookieStore = cookies()
  const url = new URL(req.url)

  const page = url.searchParams.get("page")
  const estado = url.searchParams.get("estado")
  const nome = url.searchParams.get("nome")

  console.log(estado, nome)

  const token = cookieStore.get("token")?.value
  const userData = parseJwt(token)

  try {
    let apiUrl =
      process.env.NEXT_PUBLIC_BASE_URL +
      "/v1/clientes/profissionais/" +
      userData.user_id +
      "?page=" +
      page +
      "&size=6"

    const res = await fetch(apiUrl, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })

    const clientes = await res.json()

    return NextResponse.json(clientes)
  } catch (error) {
    return NextResponse.json(error)
  }
}
