"use client"

import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { Loader2Icon } from "lucide-react"

import { Button } from "@/components/shared/button"
import { Input } from "@/components/shared/input"
import { DynamicRadioField } from "@/components/ui/patients-navbar/dynamic-radio-field"
import { AddPatientSchema } from "@/schemas/add_patient"

import { useAddPatientContext } from "./add-patient-context"

export function StepTwo() {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddPatientSchema>()
  const { handlePreviousStep, isSubmitLoading } = useAddPatientContext()

  return (
    <div className="flex flex-col gap-4">
      <div>
        <DynamicRadioField
          label="Tem histórico de doenças na família?"
          field="observacao.historico_doenca_familiar"
          hasField="observacao.possui_historico_doenca_familiar"
          error={errors.observacao?.historico_doenca_familiar?.message!}
        />
      </div>
      <DynamicRadioField
        label="Tem histórico de doenças pessoais?"
        field="observacao.historico_doenca_pessoal"
        hasField="observacao.possui_historico_doenca_pessoal"
        error={errors.observacao?.historico_doenca_pessoal?.message!}
      />
      <DynamicRadioField
        label="Possui algum acidente ou lesão osteomuscular?"
        field="observacao.lesao_osteomuscular"
        hasField="observacao.lesao_osteomuscular"
        error={errors.observacao?.lesao_musculoesqueletica?.message!}
      />
      <DynamicRadioField
        label="Foi submetido a alguma cirurgia?"
        field="observacao.historico_cirurgia"
        hasField="observacao.possui_historico_cirurgia"
        error={errors.observacao?.historico_cirurgia?.message!}
      />
      <DynamicRadioField
        label="Utiliza algum tipo de medicamento?"
        field="observacao.medicacao"
        hasField="observacao.possui_medicacao"
        error={errors.observacao?.medicacao?.message!}
      />
      <DynamicRadioField
        label="Tem ou teve o hábito de fumar ou beber?"
        field="observacao.habito_fumar_ou_beber"
        hasField="observacao.possui_habito_fumar_ou_beber"
        error={errors.observacao?.habito_fumar_ou_beber?.message!}
      />
      <DynamicRadioField
        label="Já apresentou algum tipo de alergia a alimento?"
        field="observacao.alergia_alimentar"
        hasField="observacao.possui_alergia_alimentar"
        error={errors.observacao?.alergia_alimentar?.message!}
      />
      <DynamicRadioField
        label="Já apresentou algum tipo de alergia a medicamento?"
        field="observacao.alergia_medicamento"
        hasField="observacao.possui_alergia_medicamento"
        error={errors.observacao?.alergia_medicamento?.message!}
      />
      <Input
        {...register("observacao.preferencia_ou_aversao_alimentar")}
        placeholder="Ex: Beterraba"
        label="Preferência / aversão alimentar"
      />
      <Input
        {...register(
          "observacao.avaliacao_postural_e_alteracoes_musculoesqueleticas",
        )}
        placeholder="Ex: Escoliose"
        label="Avaliação postural / Alterações musculoesqueléticas"
      />
      <Input
        {...register("observacao.tempo_trabalho_diario")}
        placeholder="Ex: 7 - 8h"
        label="Horário de trabalho / Atividade diária"
      />
      <Input
        {...register("observacao.ciclo_sono")}
        placeholder="Ex: 00h as 6h"
        label="Ciclo de sono"
      />
      <Input
        {...register("observacao.outras_observacoes")}
        placeholder="Ex: Aanda de skate"
        label="Outras observações"
      />
      <div className="flex items-center justify-between">
        <Button onClick={handlePreviousStep} type="button">
          Voltar
        </Button>
        <Button disabled={isSubmitLoading} type="submit">
          {isSubmitLoading && (
            <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />
          )}
          Finalizar
        </Button>
      </div>
    </div>
  )
}
