import { useFormContext } from "react-hook-form"

import { Button } from "@/components/shared/button"
import { Input } from "@/components/shared/input"
import { Typography } from "@/components/shared/typography"
import {
  AddEvaluationSchemaInput,
  AddEvaluationSchemaOutput,
} from "@/schemas/add_evaluation"
import { doubleMask } from "@/utils/masks"

import { useAddEvaluationContext } from "./add-evaluation-context"

export function StepTwo() {
  const { handleNextStep, handlePreviousStep } = useAddEvaluationContext()
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<
    AddEvaluationSchemaInput,
    never,
    AddEvaluationSchemaOutput
  >()

  const setInputValue = (field: any, value: string) => {
    setValue(field, doubleMask(value))
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

  return (
    <div>
      <Typography variant="h5" weight="bold" className="mb-4">
        Perímetros (cm)
      </Typography>
      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
        <Input
          {...createInputProps("perimetro.torax")}
          maxLength={6}
          label="Torax"
          placeholder="Ex: 105"
          error={errors.perimetro?.torax?.message}
        />
        <Input
          {...createInputProps("perimetro.cintura")}
          maxLength={6}
          label="Cintura"
          placeholder="Ex: 78"
          error={errors.perimetro?.cintura?.message}
        />
        <Input
          {...createInputProps("perimetro.abdominal")}
          maxLength={6}
          label="Abdômem"
          placeholder="Ex: 82"
          error={errors.perimetro?.abdominal?.message}
        />
        <Input
          {...createInputProps("perimetro.quadril")}
          maxLength={6}
          label="Quadril"
          placeholder="Ex: 100"
          error={errors.perimetro?.quadril?.message}
        />
        <Input
          {...createInputProps("perimetro.antebraco_e")}
          maxLength={6}
          label="Antebraço esquerdo"
          placeholder="Ex: 29"
          error={errors.perimetro?.antebraco_e?.message}
        />
        <Input
          {...createInputProps("perimetro.antebraco_d")}
          maxLength={6}
          label="Antebraço direito"
          placeholder="Ex: 29"
          error={errors.perimetro?.antebraco_d?.message}
        />
        <Input
          {...createInputProps("perimetro.braco_e")}
          maxLength={6}
          label="Braço esquerdo"
          placeholder="Ex: 38"
          error={errors.perimetro?.braco_e?.message}
        />
        <Input
          {...createInputProps("perimetro.braco_d")}
          maxLength={6}
          label="Braço direito"
          placeholder="Ex: 37"
          error={errors.perimetro?.braco_d?.message}
        />
        <Input
          {...createInputProps("perimetro.pescoco")}
          maxLength={6}
          label="Pescoço"
          placeholder="Ex: 40"
          error={errors.perimetro?.pescoco?.message}
        />
        <Input
          {...createInputProps("perimetro.ombro")}
          maxLength={6}
          label="Ombro"
          placeholder="Ex: 100"
          error={errors.perimetro?.ombro?.message}
        />
        <Input
          {...createInputProps("perimetro.coxa_e")}
          maxLength={6}
          label="Coxa esquerda"
          placeholder="Ex: 60"
          error={errors.perimetro?.coxa_e?.message}
        />
        <Input
          {...createInputProps("perimetro.coxa_d")}
          maxLength={6}
          label="Coxa direita"
          placeholder="Ex: 60"
          error={errors.perimetro?.coxa_d?.message}
        />
        <Input
          {...createInputProps("perimetro.panturrilha_e")}
          maxLength={6}
          label="Panturrilha esquerda"
          placeholder="Ex: 60"
          error={errors.perimetro?.panturrilha_e?.message}
        />
        <Input
          {...createInputProps("perimetro.panturrilha_d")}
          maxLength={6}
          label="Panturrilha direita"
          placeholder="Ex: 60"
          error={errors.perimetro?.panturrilha_d?.message}
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
