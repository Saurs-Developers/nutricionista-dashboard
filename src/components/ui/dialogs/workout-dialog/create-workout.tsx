import { useFormContext } from "react-hook-form"

import { Button } from "@/components/shared/button"
import { Checkbox } from "@/components/shared/checkbox"
import { Input } from "@/components/shared/input"
import { Label } from "@/components/shared/label"
import { Textarea } from "@/components/shared/textarea"
import { weekDays } from "@/utils/weekdays"

import { useAddWorkoutContext } from "./add-workout-context"

export function StepOne() {
  const { register } = useFormContext()
  const { handleNextStep } = useAddWorkoutContext()

  return (
    <div className="flex flex-col gap-4">
      <Input {...register("nome")} label="Nome" placeholder="Ex: treino A" />
      <div>
        <Label htmlFor="Observações" className="mb-1">
          Observações <span className="text-gray-500">(opcional)</span>
        </Label>
        <Textarea
          className="resize-none"
          id="Observações"
          {...register("observacao")}
          placeholder="Ex: Fazer mobilidade toráxica"
        />
      </div>
      <div>
        <Label htmlFor="">Dias da semana</Label>
        <div className="space-y-2 mt-1">
          {weekDays.map((day, key) => {
            return (
              <div key={key} className="flex items-center space-x-2">
                <Checkbox value={day.label} id={day.id} />
                <label
                  htmlFor="segunda-feira"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {day.label}
                </label>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex justify-end">
        <Button onClick={() => handleNextStep()}>Próximo</Button>
      </div>
    </div>
  )
}
