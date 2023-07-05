import { Controller, useFormContext } from "react-hook-form"
import { Dumbbell, Flame, Zap } from "lucide-react"

import { Button } from "@/components/shared/button"
import { Input } from "@/components/shared/input"
import { Label } from "@/components/shared/label"
import { RadioGroup, RadioGroupItem } from "@/components/shared/radio-group"
import { Typography } from "@/components/shared/typography"
import { AddEvaluationSchema } from "@/schemas/add_evaluation"

import { useAddEvaluationContext } from "./add-evaluation-context"

export function StepOne() {
  const { handleNextStep } = useAddEvaluationContext()
  const { register, control, setValue, watch } =
    useFormContext<AddEvaluationSchema>()

  const peso = watch("peso")
  const consumo_ideal_agua = watch("consumo_ideal_agua")

  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-6">
      <Input {...register("peso")} label="Peso (kg)" placeholder="Ex: 84" />
      <Input
        {...register("altura")}
        label="Altura (cm)"
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
        value={Number(consumo_ideal_agua) / Number(peso)}
        onChange={(e) => {
          console.log(consumo_ideal_agua, peso, e.target.value)
          setValue("consumo_ideal_agua", Number(e.target.value) * Number(peso))
        }}
        label="Quantidade de água (ml/kg corporal)"
        placeholder="Ex: 50"
      />
      <Input
        readOnly
        {...register("consumo_ideal_agua")}
        label="Consumo de água diário"
        placeholder="Ex: 85"
      />
      <Input
        {...register("objetivo")}
        containerStyles="col-span-2"
        label="Objetivo"
        placeholder="Ex: Perder gordura e ganhar massa muscular"
      />
      <div className="col-span-2">
        <Typography className="mb-4">Plano</Typography>
        <Controller
          defaultValue="ULTIMATE"
          name="plano"
          control={control}
          render={({ field: { onChange, value } }) => (
            <RadioGroup
              className="flex-col"
              onValueChange={onChange}
              id="plano"
              value={value}
              defaultValue="ULTIMATE"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="BASIC" id="r1" />
                <Label className="flex items-center gap-2" htmlFor="r1">
                  Basic <Flame size={16} /> (Apenas treino)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="PRO" id="r2" />
                <Label className="flex items-center gap-2" htmlFor="r2">
                  Pro <Dumbbell size={16} /> (Apenas dieta)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ULTIMATE" id="r3" />
                <Label className="flex items-center gap-2" htmlFor="r3">
                  Ultimate <Zap size={16} /> (Treino e dieta)
                </Label>
              </div>
            </RadioGroup>
          )}
        />
        <div className="flex justify-end col-span-2">
          <Button type="button" onClick={handleNextStep}>
            Próximo
          </Button>
        </div>
      </div>
    </div>
  )
}
