import { useFormContext } from "react-hook-form"

import { Button } from "@/components/shared/button"
import { Input } from "@/components/shared/input"
import { Typography } from "@/components/shared/typography"

import { useAddEvaluationContext } from "./add-evaluation-context"

export function StepTwo() {
  const { handleNextStep, handlePreviousStep } = useAddEvaluationContext()
  const { register } = useFormContext()

  return (
    <div>
      <Typography variant="h5" weight="bold" className="mb-4">
        Perímetros
      </Typography>
      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
        <Input
          {...register("torax")}
          label="Torax (cm)"
          placeholder="Ex: 105"
        />
        <Input
          {...register("cintura")}
          label="Cintura (cm)"
          placeholder="Ex: 78"
        />
        <Input {...register("abdomem")} label="Abdômem" placeholder="Ex: 82" />
        <Input
          {...register("quadril")}
          label="Quadril (cm)"
          placeholder="Ex: 100"
        />
        <Input
          {...register("antebraço_d")}
          label="Antebraço direito (cm)"
          placeholder="Ex: 29"
        />
        <Input
          {...register("antebraço_e")}
          label="Antebraço esquerdo (cm)"
          placeholder="Ex: 29"
        />
        <Input
          {...register("braço_d")}
          label="Braço direito (cm)"
          placeholder="Ex: 37"
        />
        <Input
          {...register("braço_e")}
          label="Braço esquerdo (cm)"
          placeholder="Ex: 38"
        />
        <Input
          {...register("coxa_d")}
          label="Coxa direita (cm)"
          placeholder="Ex: 60"
        />
        <Input
          {...register("coxa_e")}
          label="Coxa esquerda (cm)"
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
