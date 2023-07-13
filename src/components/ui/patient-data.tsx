import { format } from "date-fns"
import { Pencil } from "lucide-react"

import { Cliente } from "@/@types/clientes"
import { Box } from "@/components/shared/box"
import { Input } from "@/components/shared/input"
import { Typography } from "@/components/shared/typography"

export function PatientData({ cliente }: { cliente: Cliente }) {
  return (
    <div className="grid grid-cols-12 gap-y-4 gap-5 mt-8">
      <Box className="col-span-4">
        <div className="flex items-center justify-between">
          <Typography weight="bold" variant="h4">
            Dados
          </Typography>
          <button>
            <Pencil size={16} />
          </button>
        </div>
        <div className="space-y-4 mt-3">
          <Input readOnly label="Nome" value={cliente.nome} />
          <Input readOnly label="E-mail" value={cliente.email} />
          <Input
            readOnly
            label="Sexo"
            className="capitalize"
            value={cliente.sexo.toLowerCase()}
          />
          <Input readOnly label="Estado" value={cliente.estado} />
          <Input
            readOnly
            className="capitalize"
            label="Cidade"
            value={cliente.cidade}
          />
          <Input readOnly label="Contato" value={cliente.contato} />
          <Input
            readOnly
            label="Data de nascimento"
            value={format(new Date(cliente.data_nascimento), "dd/MM/yyyy")}
          />
        </div>
      </Box>
      <Box className="col-span-8">
        <div className="flex items-center justify-between">
          <Typography weight="bold" variant="h4">
            Observações
          </Typography>
          <button>
            <Pencil size={16} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <Input
            readOnly
            label="Histórico de doenças na família"
            value={
              cliente.observacao.historico_doenca_familiar.length > 0
                ? cliente.observacao.historico_doenca_familiar
                : "Não"
            }
          />
          <Input
            readOnly
            label="Já apresentou alergia a algum medicamento"
            value={
              cliente.observacao.alergia_medicamento.length > 0
                ? cliente.observacao.alergia_medicamento
                : "Não"
            }
          />
          <Input
            readOnly
            label="Histórico de doenças pessoais"
            value={
              cliente.observacao.historico_doenca_pessoal.length > 0
                ? cliente.observacao.historico_doenca_pessoal
                : "Não"
            }
          />
          <Input
            readOnly
            label="Aversão / Preferencia alimentar"
            value={
              cliente.observacao.preferencia_ou_aversao_alimentar.length > 0
                ? cliente.observacao.preferencia_ou_aversao_alimentar
                : "Não"
            }
          />
          <Input
            readOnly
            label="Lesão/Acidente osteomuscular"
            value={
              cliente.observacao.lesao_osteomuscular.length > 0
                ? cliente.observacao.lesao_osteomuscular
                : "Não"
            }
          />
          <Input
            readOnly
            label="Horário de trabalho, atividade diária"
            value={
              cliente.observacao.tempo_trabalho_diario.length > 0
                ? cliente.observacao.tempo_trabalho_diario
                : "Não"
            }
          />
          <Input
            readOnly
            label="Foi submetido a alguma cirurgia"
            value={
              cliente.observacao.historico_cirurgia.length > 0
                ? cliente.observacao.historico_cirurgia
                : "Não"
            }
          />
          <Input
            readOnly
            label="Ciclo de sono"
            value={
              cliente.observacao.ciclo_sono.length > 0
                ? cliente.observacao.ciclo_sono
                : "Não"
            }
          />
          <Input
            readOnly
            label="Utiliza algum tipo de medicamento"
            value={
              cliente.observacao.medicacao.length > 0
                ? cliente.observacao.medicacao
                : "Não"
            }
          />

          <Input
            readOnly
            label="Tem ou teve hábito de fumar ou beber"
            value={
              cliente.observacao.habito_fumar_ou_beber.length > 0
                ? cliente.observacao.habito_fumar_ou_beber
                : "Não"
            }
          />
          <Input
            readOnly
            label="Já apresentou algum tipo de alergia a alimento"
            value={
              cliente.observacao.alergia_alimentar.length > 0
                ? cliente.observacao.alergia_alimentar
                : "Não"
            }
          />
          <Input
            readOnly
            label="Outros"
            value={
              cliente.observacao.outras_observacoes.length > 0
                ? cliente.observacao.outras_observacoes
                : "Não"
            }
          />

          <Input
            readOnly
            label="Avaliação postural / Alterações musculoesqueléticas"
            value={
              cliente.observacao
                .avaliacao_postural_e_alteracoes_musculoesqueleticas.length > 0
                ? cliente.observacao
                    .avaliacao_postural_e_alteracoes_musculoesqueleticas
                : "Não"
            }
          />
        </div>
      </Box>
    </div>
  )
}
