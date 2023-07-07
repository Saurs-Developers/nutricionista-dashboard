import { Button } from "@/components/shared/button"
import { Input } from "@/components/shared/input"

interface Props {
  toggleEditMode: () => void
}

export function ExerciseList({ toggleEditMode }: Props) {
  return (
    <div>
      <section className="grid grid-cols-10 max-h-[348px] overflow-auto items-end gap-4 full">
        <Input
          containerStyles="col-span-3"
          value="Rosca direta"
          label="Exercício"
          readOnly
        />
        <Input
          readOnly
          value="Bi-set + 15 de rosca inversa"
          containerStyles="col-span-3"
          label="Observações"
        />
        <Input label="Séries" readOnly value="3" />
        <Input readOnly value={15} label="Repetições" />
        <Input readOnly value={45} label="Descanso (s)" />
        <Input readOnly value={35} label="Carga" />
        <Input
          containerStyles="col-span-3"
          value="Rosca direta"
          label="Exercício"
          readOnly
        />
        <Input
          readOnly
          value="Bi-set + 15 de rosca inversa"
          containerStyles="col-span-3"
          label="Observações"
        />
        <Input label="Séries" readOnly value="3" />
        <Input readOnly value={15} label="Repetições" />
        <Input readOnly value={45} label="Descanso (s)" />
        <Input readOnly value={35} label="Carga" />
        <Input
          containerStyles="col-span-3"
          value="Rosca direta"
          label="Exercício"
          readOnly
        />
        <Input
          readOnly
          value="Bi-set + 15 de rosca inversa"
          containerStyles="col-span-3"
          label="Observações"
        />
        <Input label="Séries" readOnly value="3" />
        <Input readOnly value={15} label="Repetições" />
        <Input readOnly value={45} label="Descanso (s)" />
        <Input readOnly value={35} label="Carga" />
        <Input
          containerStyles="col-span-3"
          value="Rosca direta"
          label="Exercício"
          readOnly
        />
        <Input
          readOnly
          value="Bi-set + 15 de rosca inversa"
          containerStyles="col-span-3"
          label="Observações"
        />
        <Input label="Séries" readOnly value="3" />
        <Input readOnly value={15} label="Repetições" />
        <Input readOnly value={45} label="Descanso (s)" />
        <Input readOnly value={35} label="Carga" />
        <Input
          containerStyles="col-span-3"
          value="Rosca direta"
          label="Exercício"
          readOnly
        />
        <Input
          readOnly
          value="Bi-set + 15 de rosca inversa"
          containerStyles="col-span-3"
          label="Observações"
        />
        <Input label="Séries" readOnly value="3" />
        <Input readOnly value={15} label="Repetições" />
        <Input readOnly value={45} label="Descanso (s)" />
        <Input readOnly value={35} label="Carga" />
        <Input
          containerStyles="col-span-3"
          value="Rosca direta"
          label="Exercício"
          readOnly
        />
        <Input
          readOnly
          value="Bi-set + 15 de rosca inversa"
          containerStyles="col-span-3"
          label="Observações"
        />
        <Input label="Séries" readOnly value="3" />
        <Input readOnly value={15} label="Repetições" />
        <Input readOnly value={45} label="Descanso (s)" />
        <Input readOnly value={35} label="Carga" />
      </section>
      <div className="flex justify-end">
        <Button onClick={() => toggleEditMode()} className="mt-6">
          Editar
        </Button>
      </div>
    </div>
  )
}
