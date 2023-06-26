import { Controller, useFormContext } from "react-hook-form"
import { Dumbbell, Flame, Zap } from "lucide-react"

import { Input } from "@/components/shared/input"
import { Label } from "@/components/shared/label"
import { RadioGroup, RadioGroupItem } from "@/components/shared/radio-group"
import { Typography } from "@/components/shared/typography"

export function StepOne() {
  const { register, control } = useFormContext()

  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-6">
      <Input {...register("peso")} label="Peso (kg)" placeholder="Ex: 84" />
      <Input
        {...register("Altura (cm)")}
        label="Altura"
        placeholder="Ex: 183"
      />
      <Input
        {...register("pressao_arterial")}
        label="Pressão arterial (sis/dia)"
        placeholder="Ex: 12/8"
      />
      <Input
        {...register("fc_repouso")}
        label="F.C Repouso (bpm)"
        placeholder="Ex: 85"
      />
      <Input
        {...register("objetivo")}
        className="col-span-2"
        label="Objetivo"
        placeholder="Ex: Perder gordura e ganhar massa muscular"
      />

      <div className="col-span-2">
        <Typography className="mb-4">Plano</Typography>
        <Controller
          name="plano"
          control={control}
          render={({ field }) => (
            <RadioGroup
              className="flex-col"
              onValueChange={field.onChange}
              id="plano"
              defaultValue="ultimate"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="basic" id="r1" />
                <Label className="flex items-center gap-2" htmlFor="r1">
                  Basic <Flame size={16} /> (Apenas treino)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pro" id="r2" />
                <Label className="flex items-center gap-2" htmlFor="r2">
                  Pro <Dumbbell size={16} /> (Apenas dieta)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ultimate" id="r3" />
                <Label className="flex items-center gap-2" htmlFor="r3">
                  Ultimate <Zap size={16} /> (Treino e dieta)
                </Label>
              </div>
            </RadioGroup>
          )}
        />
      </div>
    </div>
  )
}
