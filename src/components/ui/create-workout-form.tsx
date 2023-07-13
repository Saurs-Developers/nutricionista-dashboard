"use client"

import { Controller, useFormContext } from "react-hook-form"
import { Loader2Icon } from "lucide-react"

import { Button } from "@/components/shared/button"
import { Checkbox } from "@/components/shared/checkbox"
import { Input } from "@/components/shared/input"
import { Label } from "@/components/shared/label"
import { Textarea } from "@/components/shared/textarea"
import { AddWorkoutSchema } from "@/schemas/add_workout"
import { weekDays } from "@/utils/weekdays"

import { Typography } from "../shared/typography"

export function CreateWorkoutForm({ isLoading }: { isLoading: boolean }) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<AddWorkoutSchema>()

  return (
    <div className="flex flex-col gap-4">
      <Input
        {...register("titulo")}
        label="Nome"
        placeholder="Ex: treino A"
        error={errors.titulo?.message}
      />
      <div>
        <Label htmlFor="Observações" className="mb-1">
          Observações <span className="text-gray-500">(opcional)</span>
        </Label>
        <Textarea
          className="resize-none"
          id="Observações"
          {...register("observacores")}
          placeholder="Ex: Fazer mobilidade toráxica"
        />
      </div>
      <div>
        <Label htmlFor="">Dias da semana</Label>
        <div className="space-y-2 mt-1">
          {weekDays.map((day, key) => {
            return (
              <Controller
                key={day.id}
                name="dias"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <div key={key} className="flex items-center space-x-2">
                    <Checkbox
                      checked={value?.includes(day.id)}
                      onCheckedChange={(checked) => {
                        return checked
                          ? onChange([...value, day.id])
                          : onChange(value?.filter((value) => value !== day.id))
                      }}
                      value={day.id}
                      id={day.id}
                    />
                    <label
                      htmlFor="segunda-feira"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {day.label}
                    </label>
                  </div>
                )}
              />
            )
          })}
          <Typography className="leading-7 text-sm text-danger mt-1 text-red-500 font-normal">
            {errors.dias?.message}
          </Typography>
        </div>
      </div>
      <div className="flex justify-end">
        <Button disabled={isLoading} type="submit">
          {isLoading && <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />}
          Finalizar
        </Button>
      </div>
    </div>
  )
}
