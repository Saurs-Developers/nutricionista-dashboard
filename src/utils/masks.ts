export const numberMask = (value: string | undefined) => {
  if (!value) return ""
  return value.replace(/\D/g, "")
}

export const doubleMask = (value: string) => {
  value = value.replace(/\D/g, "")
  value = value.replace(",", ".")

  const result = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
  }).format(parseFloat(value) / 100)

  if (result === "NaN") return null
  return result
}

export const bloodPressureMask = (value: string | undefined) => {
  if (!value) return ""

  const numericValue = value.replace(/\D/g, "")

  if (numericValue.length >= 4) {
    const sys = numericValue.slice(0, -2)
    const dia = numericValue.slice(-2)
    return `${sys}/${dia}`
  }

  return numericValue
}
