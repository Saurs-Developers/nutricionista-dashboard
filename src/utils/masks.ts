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

  if (result === "NaN") return parseFloat("0.00")
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
