import React from "react"
import clsx from "clsx"

const variants = {
  h1: "scroll-m-20 text-4xl tracking-tight lg:text-5xl",
  h2: "scroll-m-20 text-3xl tracking-tight transition-colors first:mt-0",
  h3: "scroll-m-20 text-2xl tracking-tight",
  h4: "scroll-m-20 text-xl tracking-tight",
  h5: "scroll-m-20 text-lg tracking-tight",
  body: "leading-7",
  p: "leading-7 text-sm",
  small: "leading-7 text-xs",
}

const weights = {
  light: "font-light",
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
}

type Variant = keyof typeof variants
type Weight = keyof typeof weights

interface TypographyProps {
  children: React.ReactNode
  variant?: Variant
  weight?: Weight
  className?: string
}

export function Typography({
  children,
  className = "",
  variant = "p",
  weight = "regular",
}: TypographyProps) {
  const Component = variant
  const styleVariant = variants[variant]
  const weightVariant = weights[weight]

  if (Component === "body" || Component === "small") {
    return (
      <p className={clsx(styleVariant, className, weightVariant)}>{children}</p>
    )
  }

  return (
    <Component className={clsx(styleVariant, className, weightVariant)}>
      {children}
    </Component>
  )
}
