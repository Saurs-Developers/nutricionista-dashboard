import { Controller, useFormContext } from "react-hook-form"

import { Input } from "@/components/shared/input"
import { Label } from "@/components/shared/label"
import { RadioGroup, RadioGroupItem } from "@/components/shared/radio-group"

interface DynamicRadioFieldProps {
  field: string
  hasField: string
  label: string
  error: string
}

export function DynamicRadioField({
  field,
  hasField,
  label,
  error,
}: DynamicRadioFieldProps) {
  const { register, control, watch } = useFormContext()

  let hasFieldValue = watch(hasField)

  return (
    <section className="flex flex-col gap-4">
      <div>
        <Label htmlFor={hasField}>{label}</Label>
        <Controller
          defaultValue="false"
          name={hasField}
          control={control}
          render={({ field: { onChange, value } }) => (
            <RadioGroup
              className="mt-4"
              value={value}
              onValueChange={onChange}
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
          <>
            <Input
              containerStyles="mt-4"
              {...register(field)}
              id={field}
              placeholder="Ex: Diabetes"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </>
        )}
      </div>
    </section>
  )
}
