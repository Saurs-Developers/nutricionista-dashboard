import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function parseJwt(token: any) {
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString())
}

export function clearCookies(cookieStore: any) {
  cookieStore.set("token", "", {
    path: "/",
    httpOnly: true,
  })

  cookieStore.set("refresh_token", "", {
    path: "/",
    httpOnly: true,
  })
}
