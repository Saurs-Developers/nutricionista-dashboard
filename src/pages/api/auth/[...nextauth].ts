import { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"

import { nextAuthOptions } from "@/lib/auth"

export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, nextAuthOptions(req, res))
}
