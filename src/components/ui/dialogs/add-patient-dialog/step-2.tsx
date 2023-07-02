"use client"

import { useFormContext } from "react-hook-form"

import { Button } from "@/components/shared/button"
import { Input } from "@/components/shared/input"
import { DynamicRadioField } from "@/components/ui/patients-navbar/dynamic-radio-field"

import { useAddPatientContext } from "./add-patient-context"

export function StepTwo() {
  const { register } = useFormContext()
  const { handlePreviousStep } = useAddPatientContext()

  return (
    <div className="flex flex-col gap-4">
      <DynamicRadioField
        label="Tem histórico de doenças na família?"
        field="historico_doenca_familiar"
        hasField="possui_historico_doenca_familiar"
      />
      <DynamicRadioField
        label="Tem histórico de doenças pessoais?"
        field="historico_doenca_pessoal"
        hasField="possui_historico_doenca_pessoal"
      />
      <DynamicRadioField
        label="Possui algum acidente ou lesão osteomuscular?"
        field="lesao_musculoesqueletica"
        hasField="possui_lesao_musculoesqueletica"
      />
      <DynamicRadioField
        label="Foi submetido a alguma cirurgia?"
        field="historico_cirurgia"
        hasField="possui_historico_cirurgia"
      />
      <DynamicRadioField
        label="Utiliza algum tipo de medicamento?"
        field="medicacao"
        hasField="possui_medicacao"
      />
      <DynamicRadioField
        label="Tem ou teve o hábito de fumar ou beber?"
        field="habito_fumar_ou_beber"
        hasField="possui_habito_fumar_ou_beber"
      />
      <DynamicRadioField
        label="Já apresentou algum tipo de alergia a alimento?"
        field="alergia_alimentar"
        hasField="possui_alergia_alimentar"
      />
      <DynamicRadioField
        label="Já apresentou algum tipo de alergia a medicamento?"
        field="alergia_medicamento"
        hasField="possui_alergia_medicamento"
      />
      <Input
        {...register("preferencia_ou_aversao_alimentar")}
        placeholder="Ex: Beterraba"
        label="Preferência / aversão alimentar"
      />
      <Input
        {...register("avaliacao_postural_e_mudancas_musculoesqueleticas")}
        placeholder="Ex: Escoliose"
        label="Avaliação postural / Alterações musculoesqueléticas"
      />
      <Input
        {...register("tempo_trabalho_diario")}
        placeholder="Ex: 7 - 8h"
        label="Horário de trabalho / Atividade diária"
      />
      <Input
        {...register("ciclo_sono")}
        placeholder="Ex: 00h as 6h"
        label="Ciclo de sono"
      />
      <Input
        {...register("outras_observacoes")}
        placeholder="Ex: Aanda de skate"
        label="Outras observações"
      />
      <div className="flex items-center justify-between">
        <Button onClick={handlePreviousStep} type="button">
          Voltar
        </Button>
        <Button type="submit">Finalizar</Button>
      </div>
    </div>
  )
}
