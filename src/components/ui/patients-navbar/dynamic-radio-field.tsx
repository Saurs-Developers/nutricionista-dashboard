import { Controller, useFormContext } from "react-hook-form"

import { Button } from "@/components/shared/button"
import { Input } from "@/components/shared/input"
import { Label } from "@/components/shared/label"
import { RadioGroup, RadioGroupItem } from "@/components/shared/radio-group"

interface DynamicRadioFieldProps {
  field: string
  hasField: string
}

export function DynamicRadioField({ field, hasField }: DynamicRadioFieldProps) {
  const { register, control, watch } = useFormContext()

  let hasFieldValue = watch(hasField)

  return (
    <section className="flex flex-col gap-4">
      <div className="space-y-4">
        <Label htmlFor={hasField}>
          Possui histórico de doenças na família?
        </Label>
        <Controller
          name={hasField}
          control={control}
          render={({ field }) => (
            <RadioGroup
              onValueChange={field.onChange}
              id={hasField}
              defaultValue="false"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="true" id="r1" />
                <Label htmlFor="r1">Sim</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="false" id="r2" />
                <Label htmlFor="r2">Não</Label>
              </div>
            </RadioGroup>
          )}
        />
        {hasFieldValue === "true" && (
          <Input {...register(field)} id={field} placeholder="Ex: Diabetes" />
        )}
      </div>
    </section>
  )
}
