import * as React from "react"

import { cn } from "@/lib/utils"

import { Label } from "./label"
import { Typography } from "./typography"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    return (
      <div>
        {label && (
          <Label className="mb-1" htmlFor="email">
            Email
          </Label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <Typography className="text-sm text-danger mt-1 text-red-500">
            {error}
          </Typography>
        )}
      </div>
    )
  },
)
Input.displayName = "Input"

export { Input }
