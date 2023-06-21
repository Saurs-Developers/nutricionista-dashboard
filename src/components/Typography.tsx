import React from "react"
import clsx from "clsx"

const variants = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  h5: "scroll-m-20 text-lg font-semibold tracking-tight",
  p: "leading-7",
}

type Variant = keyof typeof variants

interface TypographyProps {
  children: React.ReactNode
  variant?: Variant
  className?: string
}

export function Typography({
  children,
  className = "",
  variant,
}: TypographyProps) {
  const Component = variant || "p"
  const styleVariant = variants[variant || "p"]

  return (
    <Component className={clsx(styleVariant, className)}>{children}</Component>
  )
}
