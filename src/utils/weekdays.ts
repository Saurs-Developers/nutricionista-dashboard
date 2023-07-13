export const weekDays = [
  { id: "SEGUNDA", label: "Segunda-feira" },
  { id: "TERCA", label: "Terça-feira" },
  { id: "QUARTA", label: "Quarta-feira" },
  { id: "QUINTA", label: "Quinta-feira" },
  { id: "SEXTA", label: "Sexta-feira" },
  { id: "SABADO", label: "Sábado" },
  { id: "DOMINGO", label: "Domingo" },
] as const

export type WeekDay =
  | "SEGUNDA"
  | "TERCA"
  | "QUARTA"
  | "QUINTA"
  | "SEXTA"
  | "SABADO"
  | "DOMINGO"

const weekDayEquivalents = {
  SEGUNDA: "Segunda",
  TERCA: "Terça",
  QUARTA: "Quarta",
  QUINTA: "Quinta",
  SEXTA: "Sexta",
  SABADO: "Sábado",
  DOMINGO: "Domingo",
}

export const weekdayChooser = (weekDays: WeekDay[]) => {
  const formattedWeekDays = weekDays.map((weekDay) => {
    return weekDayEquivalents[weekDay]
  })

  return formattedWeekDays.join(", ").toString()
}
