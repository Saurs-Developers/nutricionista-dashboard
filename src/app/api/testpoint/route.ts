import { NextResponse } from "next/server"

export async function GET(req: Request) {
  console.log(req.headers)

  console.log(req.url)

  return NextResponse.json({ message: req.headers })
}

export async function POST(req: Request) {
  console.log(req.headers)

  const request = await req.json()

  console.log(req.url)

  return NextResponse.json({ message: req.url, body: req.body })
}
