import { useFormContext } from "react-hook-form"

import { Button } from "@/components/shared/button"
import { Input } from "@/components/shared/input"
import { Typography } from "@/components/shared/typography"
import { AddEvaluationSchema } from "@/schemas/add_evaluation"

import { useAddEvaluationContext } from "./add-evaluation-context"

export function StepTwo() {
  const { handleNextStep, handlePreviousStep } = useAddEvaluationContext()
  const { register } = useFormContext<AddEvaluationSchema>()

  return (
    <div>
      <Typography variant="h5" weight="bold" className="mb-4">
        Perímetros (cm)
      </Typography>
      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
        <Input
          {...register("perimetros.torax")}
          label="Torax"
          placeholder="Ex: 105"
        />
        <Input
          {...register("perimetros.cintura")}
          label="Cintura"
          placeholder="Ex: 78"
        />
        <Input
          {...register("perimetros.abdomem")}
          label="Abdômem"
          placeholder="Ex: 82"
        />
        <Input
          {...register("perimetros.quadril")}
          label="Quadril"
          placeholder="Ex: 100"
        />
        <Input
          {...register("perimetros.antebraco_e")}
          label="Antebraço esquerdo"
          placeholder="Ex: 29"
        />
        <Input
          {...register("perimetros.antebraco_d")}
          label="Antebraço direito"
          placeholder="Ex: 29"
        />
        <Input
          {...register("perimetros.braco_e")}
          label="Braço esquerdo"
          placeholder="Ex: 38"
        />
        <Input
          {...register("perimetros.braco_d")}
          label="Braço direito"
          placeholder="Ex: 37"
        />
        <Input
          {...register("perimetros.pescoco")}
          label="Pescoço"
          placeholder="Ex: 40"
        />
        <Input
          {...register("perimetros.ombro")}
          label="Ombro"
          placeholder="Ex: 100"
        />
        <Input
          {...register("perimetros.coxa_e")}
          label="Coxa esquerda"
          placeholder="Ex: 60"
        />
        <Input
          {...register("perimetros.coxa_d")}
          label="Coxa direita"
          placeholder="Ex: 60"
        />
        <Input
          {...register("perimetros.panturrilha_e")}
          label="Panturrilha esquerda"
          placeholder="Ex: 60"
        />
        <Input
          {...register("perimetros.panturrilha_d")}
          label="Panturrilha direita"
          placeholder="Ex: 60"
        />
        <div className="flex justify-between col-span-2">
          <Button type="button" onClick={handlePreviousStep}>
            Voltar
          </Button>
          <Button type="button" onClick={handleNextStep}>
            Próximo
          </Button>
        </div>
      </div>
    </div>
  )
}
