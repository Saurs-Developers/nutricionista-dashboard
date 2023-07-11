import { useFormContext } from "react-hook-form"

import { Button } from "@/components/shared/button"
import { Input } from "@/components/shared/input"
import { Typography } from "@/components/shared/typography"
import { AddEvaluationSchema } from "@/schemas/add_evaluation"
import { doubleMask, numberMask } from "@/utils/masks"

import { useAddEvaluationContext } from "./add-evaluation-context"

export function StepThree() {
  const { handlePreviousStep } = useAddEvaluationContext()
  const { register, watch, setValue } = useFormContext<AddEvaluationSchema>()

  const setInputValue = (field: any, value: string) => {
    setValue(field, numberMask(value))
  }

  const createInputProps = (field: any) => {
    return {
      ...register(field, {
        valueAsNumber: true,
        onChange: (e) => setInputValue(field, e.target.value),
        onBlur: (e) => {
          if (e.target.value === "") {
            setValue(field, null)
          }
        },
      }),
    }
  }

  const total =
    Number(watch("composicao_corporal.coxa")) +
    Number(watch("composicao_corporal.abdomen")) +
    Number(watch("composicao_corporal.suprailiaca")) +
    Number(watch("composicao_corporal.peitoral")) +
    Number(watch("composicao_corporal.axilar_media")) +
    Number(watch("composicao_corporal.bicepital")) +
    Number(watch("composicao_corporal.tricipital")) +
    Number(watch("composicao_corporal.subescapular")) +
    Number(watch("composicao_corporal.panturrilha")) +
    Number(watch("composicao_corporal.opcional_1")) +
    Number(watch("composicao_corporal.opcional_2"))

  return (
    <div>
      <Typography variant="h5" weight="bold" className="mb-4">
        Composição corporal
      </Typography>
      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
        <Input
          {...createInputProps("composicao_corporal.coxa")}
          maxLength={3}
          label="Coxa"
          placeholder="Ex: 7"
        />
        <Input
          {...createInputProps("composicao_corporal.abdomen")}
          maxLength={3}
          label="Abdominal"
          placeholder="Ex: 18"
        />
        <Input
          {...createInputProps("composicao_corporal.suprailiaca")}
          maxLength={3}
          label="Supra-ilíaca"
          placeholder="Ex: 17"
        />
        <Input
          {...createInputProps("composicao_corporal.peitoral")}
          maxLength={3}
          label="Peitoral"
          placeholder="Ex: 5"
        />
        <Input
          {...createInputProps("composicao_corporal.axilar_media")}
          maxLength={3}
          label="Axilar-média"
          placeholder="Ex: 14"
        />
        <Input
          {...createInputProps("composicao_corporal.bicepital")}
          maxLength={3}
          label="Bicipital"
          placeholder="Ex: 5"
        />
        <Input
          {...createInputProps("composicao_corporal.tricipital")}
          maxLength={3}
          label="Tricipital"
          placeholder="Ex: 6"
        />
        <Input
          {...createInputProps("composicao_corporal.subescapular")}
          maxLength={3}
          label="Subescapular"
          placeholder="Ex: 14"
        />
        <Input
          {...createInputProps("composicao_corporal.opcional_1")}
          maxLength={3}
          label="Opcional 1"
          placeholder="Ex: 43"
        />
        <Input
          {...createInputProps("composicao_corporal.opcional_2")}
          maxLength={3}
          label="Opcional 2"
          placeholder="Ex: 14"
        />
        <Input
          {...createInputProps("composicao_corporal.panturrilha")}
          maxLength={3}
          label="Panturrilha"
          placeholder="Ex: 14"
        />
        <Input
          {...register("fator_atv_fisica", {
            valueAsNumber: true,
            onChange: (e) => {
              setValue(
                "fator_atv_fisica",
                doubleMask(e.target.value) as unknown as number,
              )
            },
            onBlur: (e) => {
              if (e.target.value === "") {
                setValue("fator_atv_fisica", null)
              }
            },
          })}
          maxLength={5}
          label="Fator atividade física"
          placeholder="Ex: 1.2"
        />
        <Input
          containerStyles="col-span-2"
          readOnly
          label="Total"
          value={total ? total : 0}
        />
        <div className="flex justify-between col-span-2">
          <Button type="button" onClick={handlePreviousStep}>
            Voltar
          </Button>
          <Button type="submit">Finalizar</Button>
        </div>
      </div>
    </div>
  )
}
