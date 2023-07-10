import { useFormContext } from "react-hook-form"

import { Button } from "@/components/shared/button"
import { Input } from "@/components/shared/input"
import { Typography } from "@/components/shared/typography"
import { AddEvaluationSchema } from "@/schemas/add_evaluation"
import { doubleMask, numberMask } from "@/utils/masks"

import { useAddEvaluationContext } from "./add-evaluation-context"

export function StepTwo() {
  const { handleNextStep, handlePreviousStep } = useAddEvaluationContext()
  const { register, setValue } = useFormContext<AddEvaluationSchema>()

  const setInputValue = (field: any, value: string) => {
    setValue(field, doubleMask(value))
  }

  const createInputProps = (field: any) => {
    return {
      ...register(field, {
        valueAsNumber: true,
        onChange: (e) => setInputValue(field, e.target.value),
      }),
    }
  }

  return (
    <div>
      <Typography variant="h5" weight="bold" className="mb-4">
        Perímetros (cm)
      </Typography>
      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
        <Input
          {...createInputProps("perimetros.torax")}
          maxLength={6}
          label="Torax"
          placeholder="Ex: 105"
        />
        <Input
          {...createInputProps("perimetros.cintura")}
          maxLength={6}
          label="Cintura"
          placeholder="Ex: 78"
        />
        <Input
          {...createInputProps("perimetros.abdomem")}
          maxLength={6}
          label="Abdômem"
          placeholder="Ex: 82"
        />
        <Input
          {...createInputProps("perimetros.quadril")}
          maxLength={6}
          label="Quadril"
          placeholder="Ex: 100"
        />
        <Input
          {...createInputProps("perimetros.antebraco_e")}
          maxLength={6}
          label="Antebraço esquerdo"
          placeholder="Ex: 29"
        />
        <Input
          {...createInputProps("perimetros.antebraco_d")}
          maxLength={6}
          label="Antebraço direito"
          placeholder="Ex: 29"
        />
        <Input
          {...createInputProps("perimetros.braco_e")}
          maxLength={6}
          label="Braço esquerdo"
          placeholder="Ex: 38"
        />
        <Input
          {...createInputProps("perimetros.braco_d")}
          maxLength={6}
          label="Braço direito"
          placeholder="Ex: 37"
        />
        <Input
          {...createInputProps("perimetros.pescoco")}
          maxLength={6}
          label="Pescoço"
          placeholder="Ex: 40"
        />
        <Input
          {...createInputProps("perimetros.ombro")}
          maxLength={6}
          label="Ombro"
          placeholder="Ex: 100"
        />
        <Input
          {...createInputProps("perimetros.coxa_e")}
          maxLength={6}
          label="Coxa esquerda"
          placeholder="Ex: 60"
        />
        <Input
          {...createInputProps("perimetros.coxa_d")}
          maxLength={6}
          label="Coxa direita"
          placeholder="Ex: 60"
        />
        <Input
          {...createInputProps("perimetros.panturrilha_e")}
          maxLength={6}
          label="Panturrilha esquerda"
          placeholder="Ex: 60"
        />
        <Input
          {...createInputProps("perimetros.panturrilha_d")}
          maxLength={6}
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
