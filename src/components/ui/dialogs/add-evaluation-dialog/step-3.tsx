import { useFormContext } from "react-hook-form"

import { Button } from "@/components/shared/button"
import { Input } from "@/components/shared/input"
import { Typography } from "@/components/shared/typography"

import { useAddEvaluationContext } from "./add-evaluation-context"

export function StepThree() {
  const { handlePreviousStep } = useAddEvaluationContext()
  const { register } = useFormContext()

  return (
    <div>
      <Typography variant="h5" weight="bold" className="mb-4">
        Composição corporal
      </Typography>
      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
        <Input {...register("coxa")} label="Coxa" placeholder="Ex: 7" />
        <Input
          {...register("Abdominal")}
          label="Abdominal"
          placeholder="Ex: 18"
        />
        <Input
          {...register("supra_iliaca")}
          label="Supra-ilíaca"
          placeholder="Ex: 17"
        />
        <Input {...register("peitoral")} label="Peitoral" placeholder="Ex: 5" />
        <Input
          {...register("axilar_media")}
          label="Axilar-média"
          placeholder="Ex: 14"
        />
        <Input
          {...register("bicepital")}
          label="Bicepital"
          placeholder="Ex: 5"
        />
        <Input
          {...register("tricepital")}
          label="Tricepital"
          placeholder="Ex: 6"
        />
        <Input
          {...register("subscapular")}
          label="Subscapular"
          placeholder="Ex: 14"
        />
        <Input containerStyles="col-span-2" readOnly label="Total" value={86} />
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
