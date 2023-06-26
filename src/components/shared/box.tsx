import { ReactNode } from "react"
import clsx from "clsx"

export function Box({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={clsx("shadow-md p-4 rounded-md", className)}>
      {children}
    </div>
  )
}
