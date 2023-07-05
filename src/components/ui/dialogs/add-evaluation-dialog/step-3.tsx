import { useFormContext } from "react-hook-form"

import { Button } from "@/components/shared/button"
import { Input } from "@/components/shared/input"
import { Typography } from "@/components/shared/typography"
import { AddEvaluationSchema } from "@/schemas/add_evaluation"

import { useAddEvaluationContext } from "./add-evaluation-context"

export function StepThree() {
  const { handlePreviousStep } = useAddEvaluationContext()
  const { register, watch } = useFormContext<AddEvaluationSchema>()

  const total =
    Number(watch("composicao.coxa")) +
    Number(watch("composicao.abdominal")) +
    Number(watch("composicao.suprailiaca")) +
    Number(watch("composicao.peitoral")) +
    Number(watch("composicao.axilar_media")) +
    Number(watch("composicao.bicepital")) +
    Number(watch("composicao.tricipital")) +
    Number(watch("composicao.subescapular")) +
    Number(watch("composicao.panturrilha")) +
    Number(watch("composicao.opcional_1")) +
    Number(watch("composicao.opcional_2"))

  return (
    <div>
      <Typography variant="h5" weight="bold" className="mb-4">
        Composição corporal
      </Typography>
      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
        <Input
          {...register("composicao.coxa")}
          label="Coxa"
          placeholder="Ex: 7"
        />
        <Input
          {...register("composicao.abdominal")}
          label="Abdominal"
          placeholder="Ex: 18"
        />
        <Input
          {...register("composicao.suprailiaca")}
          label="Supra-ilíaca"
          placeholder="Ex: 17"
        />
        <Input
          {...register("composicao.peitoral")}
          label="Peitoral"
          placeholder="Ex: 5"
        />
        <Input
          {...register("composicao.axilar_media")}
          label="Axilar-média"
          placeholder="Ex: 14"
        />
        <Input
          {...register("composicao.bicepital")}
          label="Bicipital"
          placeholder="Ex: 5"
        />
        <Input
          {...register("composicao.tricipital")}
          label="Tricipital"
          placeholder="Ex: 6"
        />
        <Input
          {...register("composicao.subescapular")}
          label="Subescapular"
          placeholder="Ex: 14"
        />
        <Input
          {...register("composicao.opcional_1")}
          label="Opcional 1"
          placeholder="Ex: 43"
        />
        <Input
          {...register("composicao.opcional_2")}
          label="Opcional 2"
          placeholder="Ex: 14"
        />
        <Input
          {...register("composicao.panturrilha")}
          label="Panturrilha"
          placeholder="Ex: 14"
        />
        <Input
          {...register("fator_atv_fisica")}
          label="Fator atividade física"
          placeholder="Ex: 1.2"
        />
        <Input
          containerStyles="col-span-2"
          readOnly
          label="Total"
          value={total}
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
