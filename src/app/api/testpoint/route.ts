import { NextResponse } from "next/server"

export async function GET(req: Request) {
  console.log(req.headers)

  return NextResponse.json({ message: "asldkjfahsdasdf" })
}
