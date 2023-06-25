import { Label } from "@/components/shared/label"
import { RadioGroup, RadioGroupItem } from "@/components/shared/radio-group"
import { Typography } from "@/components/shared/typography"

interface DynamicRadioFieldProps {
  has?: boolean
  field: string
}

export function DynamicRadioField({ has, field }: DynamicRadioFieldProps) {
  return (
    <div className="space-y-4">
      <Typography>Histórico de doenças na família?</Typography>
      <RadioGroup defaultValue="false">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="true" id="r1" />
          <Label htmlFor="r1">Sim</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="false" id="r2" />
          <Label htmlFor="r2">Não</Label>
        </div>
      </RadioGroup>
    </div>
  )
}
