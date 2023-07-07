export const numberMask = (value: string | undefined) => {
  if (!value) return ""
  return value.replace(/\D/g, "")
}

export const doubleMask = (value: string) => {
  value = value.replace(".", "").replace(",", "").replace(/\D/g, "")

  const options = { minimumFractionDigits: 2 }
  const result = new Intl.NumberFormat("en-US", options).format(
    parseFloat(value) / 100,
  )

  return result
}
