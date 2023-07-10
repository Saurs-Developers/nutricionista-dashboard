import axios from "axios"

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HANDLER_URL,
  headers: {
    "Content-Type": "application/json",
  },
})
