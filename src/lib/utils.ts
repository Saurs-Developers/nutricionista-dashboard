import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseJwt(token: any) {
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString())
}
