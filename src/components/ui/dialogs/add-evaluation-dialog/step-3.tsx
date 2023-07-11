import { useFormContext } from "react-hook-form"
import { Loader2Icon } from "lucide-react"

import { Button } from "@/components/shared/button"
import { Input } from "@/components/shared/input"
import { Typography } from "@/components/shared/typography"
import {
  AddEvaluationSchemaInput,
  AddEvaluationSchemaOutput,
} from "@/schemas/add_evaluation"
import { doubleMask, numberMask } from "@/utils/masks"

import { useAddEvaluationContext } from "./add-evaluation-context"

export function StepThree() {
  const { handlePreviousStep, isSubmitLoading } = useAddEvaluationContext()
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<
    AddEvaluationSchemaInput,
    never,
    AddEvaluationSchemaOutput
  >()

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
          error={errors.composicao_corporal?.coxa?.message}
        />
        <Input
          {...createInputProps("composicao_corporal.abdomen")}
          maxLength={3}
          label="Abdominal"
          placeholder="Ex: 18"
          error={errors.composicao_corporal?.abdomen?.message}
        />
        <Input
          {...createInputProps("composicao_corporal.suprailiaca")}
          maxLength={3}
          label="Supra-ilíaca"
          placeholder="Ex: 17"
          error={errors.composicao_corporal?.suprailiaca?.message}
        />
        <Input
          {...createInputProps("composicao_corporal.peitoral")}
          maxLength={3}
          label="Peitoral"
          placeholder="Ex: 5"
          error={errors.composicao_corporal?.peitoral?.message}
        />
        <Input
          {...createInputProps("composicao_corporal.axilar_media")}
          maxLength={3}
          label="Axilar-média"
          placeholder="Ex: 14"
          error={errors.composicao_corporal?.axilar_media?.message}
        />
        <Input
          {...createInputProps("composicao_corporal.bicepital")}
          maxLength={3}
          label="Bicipital"
          placeholder="Ex: 5"
          error={errors.composicao_corporal?.bicepital?.message}
        />
        <Input
          {...createInputProps("composicao_corporal.tricipital")}
          maxLength={3}
          label="Tricipital"
          placeholder="Ex: 6"
          error={errors.composicao_corporal?.tricipital?.message}
        />
        <Input
          {...createInputProps("composicao_corporal.subescapular")}
          maxLength={3}
          label="Subescapular"
          placeholder="Ex: 14"
          error={errors.composicao_corporal?.subescapular?.message}
        />
        <Input
          {...createInputProps("composicao_corporal.opcional_1")}
          maxLength={3}
          label="Opcional 1"
          placeholder="Ex: 43"
          error={errors.composicao_corporal?.opcional_1?.message}
        />
        <Input
          {...createInputProps("composicao_corporal.opcional_2")}
          maxLength={3}
          label="Opcional 2"
          placeholder="Ex: 14"
          error={errors.composicao_corporal?.opcional_2?.message}
        />
        <Input
          {...createInputProps("composicao_corporal.panturrilha")}
          maxLength={3}
          label="Panturrilha"
          placeholder="Ex: 14"
          error={errors.composicao_corporal?.panturrilha?.message}
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
          error={errors.fator_atv_fisica?.message}
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
          <Button disabled={isSubmitLoading} type="submit">
            {isSubmitLoading && (
              <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />
            )}
            Finalizar
          </Button>
        </div>
      </div>
    </div>
  )
}
