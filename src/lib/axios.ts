import axios from "axios"

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

api.interceptors.response.use(
  (res) => {
    return res
  },
  async (error) => {
    console.log(error)
    const originalConfig = error.config

    if (
      error.response.status == 401 &&
      error.response.data.error == "ExpiredJwtException"
    ) {
      try {
        const res = await axios.get("http://localhost:3000/api/refresh")

        const data = await res.data

        console.log(data)

        if (res.status === 200) {
          console.log("Refreshed")

          return api(originalConfig)
        }
      } catch (e) {
        console.log("Expired")
        return Promise.reject(e)
      }
    }
  },
)
