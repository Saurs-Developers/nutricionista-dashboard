export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

import axios from "axios"

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HANDLER_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export function parseJwt(token: any) {
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString())
}
