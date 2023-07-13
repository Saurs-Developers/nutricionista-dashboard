import { Controller, useFormContext } from "react-hook-form"
import { Dumbbell, Flame, Zap } from "lucide-react"

import { Button } from "@/components/shared/button"
import { Input } from "@/components/shared/input"
import { Label } from "@/components/shared/label"
import { RadioGroup, RadioGroupItem } from "@/components/shared/radio-group"
import { Typography } from "@/components/shared/typography"
import {
  AddEvaluationSchemaInput,
  AddEvaluationSchemaOutput,
} from "@/schemas/add_evaluation"
import { bloodPressureMask, doubleMask, numberMask } from "@/utils/masks"

import { useAddEvaluationContext } from "./add-evaluation-context"

export function StepOne() {
  const { handleNextStep, waterConsumption, setWaterConsumption } =
    useAddEvaluationContext()
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<
    AddEvaluationSchemaInput,
    never,
    AddEvaluationSchemaOutput
  >()

  const peso = watch("peso")

  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-6">
      <Input
        {...register("peso", {
          valueAsNumber: true,
          onChange: (e) => {
            setValue("peso", doubleMask(e.target.value) as unknown as number)
          },
          onBlur: (e) => {
            if (e.target.value === "") {
              setValue("peso", null)
            }
          },
        })}
        maxLength={6}
        error={errors.peso?.message}
        label="Peso (kg)"
        placeholder="Ex: 84"
      />
      <Input
        {...register("altura", {
          valueAsNumber: true,
          onChange: (e) =>
            setValue("altura", Number(numberMask(e.target.value))),
          onBlur: (e) => {
            if (e.target.value === "") {
              setValue("altura", null)
            }
          },
        })}
        maxLength={3}
        error={errors.altura?.message}
        label="Altura (cm)"
        placeholder="Ex: 183"
      />
      <Input
        {...register("pressao_arterial", {
          onChange: (e) => {
            setValue("pressao_arterial", bloodPressureMask(e.target.value))
          },
        })}
        label="Pressão arterial (sis/dia)"
        placeholder="Ex: 12/8"
        maxLength={5}
        error={errors.pressao_arterial?.message}
      />
      <Input
        {...register("fc_repouso", {
          valueAsNumber: true,
          onChange: (e) =>
            setValue("fc_repouso", Number(numberMask(e.target.value))),
          onBlur: (e) => {
            if (e.target.value === "") {
              setValue("fc_repouso", null)
            }
          },
        })}
        maxLength={3}
        error={errors.fc_repouso?.message}
        label="F.C Repouso (bpm)"
        placeholder="Ex: 85"
      />
      <Input
        value={waterConsumption}
        onChange={(e) => {
          setWaterConsumption(Number(e.target.value))
          setValue(
            "consumo_ideal_agua",
            Math.floor(Number(e.target.value) * Number(peso!)),
          )
        }}
        label="Quantidade de água (ml/kg corporal)"
        placeholder="Ex: 50"
        maxLength={2}
        error={errors.consumo_ideal_agua?.message}
      />
      <Input
        readOnly
        {...register("consumo_ideal_agua", { valueAsNumber: true })}
        label="Consumo de água diário"
      />
      <Input
        {...register("objetivo")}
        containerStyles="col-span-2"
        label="Objetivo"
        placeholder="Ex: Perder gordura e ganhar massa muscular"
        error={errors.objetivo?.message}
      />
      <div className="col-span-2">
        <Typography className="mb-4">Plano</Typography>
        <Controller
          defaultValue="ULTIMATE"
          name="plano"
          render={({ field: { onChange, value } }) => (
            <RadioGroup
              className="flex-col"
              onValueChange={onChange as (value: string) => void}
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
