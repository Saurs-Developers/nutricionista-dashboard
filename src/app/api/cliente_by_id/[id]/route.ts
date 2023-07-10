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
    let apiUrl = process.env.NEXT_PUBLIC_BASE_URL + "/v1/clientes/" + id

    const res = await fetch(apiUrl, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })

    const clientes = await res.json()

    return NextResponse.json(clientes)
  } catch (error) {
    console.error("API request failed:", error)
    return NextResponse.json(
      {
        error: "API request failed.",
      },
      { status: 400 },
    )
  }
}
