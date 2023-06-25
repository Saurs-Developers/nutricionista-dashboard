"use client"

import { useFormContext } from "react-hook-form"

import { Input } from "@/components/shared/input"

import { DynamicRadioField } from "../dynamic-radio-field"

export function StepTwo() {
  const { register } = useFormContext()

  return (
    <div className="flex flex-col gap-4">
      <DynamicRadioField
        field="historico_doenca_familiar"
        hasField="possui_historico_doenca_familiar"
      />
      <DynamicRadioField
        field="historico_doenca_pessoal"
        hasField="possui_historico_doenca_pessoal"
      />
      <DynamicRadioField
        field="lesao_musculoesqueletica"
        hasField="possui_lesao_musculoesqueletica"
      />
      <DynamicRadioField
        field="historico_cirurgia"
        hasField="possui_historico_cirurgia"
      />
      <DynamicRadioField field="medicacao" hasField="possui_medicacao" />
      <DynamicRadioField
        field="habito_fumar_ou_beber"
        hasField="possui_habito_fumar_ou_beber"
      />
      <DynamicRadioField
        field="alergia_alimentar"
        hasField="possui_alergia_alimentar"
      />
      <DynamicRadioField
        field="alergia_medicamento"
        hasField="possui_alergia_medicamento"
      />
      <Input
        {...register("preferencia_ou_aversao_alimentar")}
        placeholder="Ex: Beterraba"
        label="Preferência ou aversão alimentar"
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
    </div>
  )
}
