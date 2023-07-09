import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(
  req: Request,
  { params }: { params: { id: number } },
) {
  const cookieStore = cookies()
  const token = cookieStore.get("token")?.value

  const id = params.id

  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/v1/clientes/" + id,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    )

    const cliente = await res.json()

    return NextResponse.json(cliente)
  } catch (error) {
    return NextResponse.json(error)
  }
}
