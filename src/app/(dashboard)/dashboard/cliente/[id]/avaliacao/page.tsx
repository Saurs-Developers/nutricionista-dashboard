import { headers } from "next/headers"

export default async function Evaluation() {
  const res = await fetch("http://localhost:3000/api/testpoint")

  return <div>avaliacao</div>
}
