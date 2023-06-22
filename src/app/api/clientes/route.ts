import axios from "axios"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
  const cookieStore = cookies()

  const token = cookieStore.get("token")!.value

  console.log(token)

  try {
    const res = await axios.request({
      method: "get",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/v1/clientes`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await res.data

    if (res.status === 200) {
      return NextResponse.json(data)
    }
  } catch (e) {
    console.log(e)

    return NextResponse.json({ message: "Token expired.", status: 401 })
  }
}
