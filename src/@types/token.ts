type Roles = "ROLE_ADMIN" | "ROLE_PERSONAL" | "ROLE_NUTRICIONISTA"

export interface Token {
  user_id: string
  user_roles: Roles[]
  sub: string
  iat: number
  exp: number
}
