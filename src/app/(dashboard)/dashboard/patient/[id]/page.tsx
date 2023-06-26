import { File, Pencil } from "lucide-react"
import Link from "next/link"

import { Box } from "@/components/shared/box"
import { Button } from "@/components/shared/button"
import { Input } from "@/components/shared/input"
import { Typography } from "@/components/shared/typography"

export default function Patient() {
  return (
    <div>
      <Typography weight="bold" variant="h2">
        Samuel Luiz
      </Typography>
      <Link className="block underline my-8" href="/dashboard">
        Voltar para a listagem de pacientes
      </Link>
      <Link href="/dashboard/patient/12345/evaluation">
        <Button>
          Acompanhamento <File className="ml-2" size={20} />
        </Button>
      </Link>
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
            <Input readOnly label="Nome" value="Samuel Luiz" />
            <Input readOnly label="E-mail" value="samukzik69@gmail.com" />
            <Input readOnly label="Sexo" value="Masculino" />
            <Input readOnly label="Estado" value="Acre" />
            <Input readOnly label="Cidade" value="Rio Branco" />
            <Input readOnly label="Contato" value="(86) 98876-1832" />
            <Input readOnly label="Data de nascimento" value="04/08/2003" />
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
              value="Não"
            />
            <Input
              readOnly
              label="Já apresentou alergia a algum medicamento"
              value="Penicilina"
            />
            <Input
              readOnly
              label="Histórico de doenças pessoais"
              value="Depressão"
            />
            <Input
              readOnly
              label="Aversão / Preferencia alimentar"
              value="Não come goiabada"
            />
            <Input
              readOnly
              label="Lesão/Acidente osteomuscular"
              value="Lesão no menisco"
            />
            <Input
              readOnly
              label="Horário de trabalho, atividade diária"
              value="Não"
            />
            <Input
              readOnly
              label="Foi submetido a alguma cirurgia"
              value="Lesão séria no braço direito"
            />
            <Input readOnly label="Ciclo de sono" value="Não" />
            <Input
              readOnly
              label="Utiliza algum tipo de medicamento"
              value="Roacutan"
            />
            <Input readOnly label="Avaliação postural" value="Escolióse" />
            <Input
              readOnly
              label="Tem ou teve hábito de fumar ou beber"
              value="Não"
            />
            <Input
              readOnly
              label="Alterações musculo esqueléticas"
              value="Não"
            />
            <Input
              readOnly
              label="Já apresentou algum tipo de alergia a alimento"
              value="Amendoim"
            />
            <Input readOnly label="Outros" value="Não" />
          </div>
        </Box>
      </div>
    </div>
  )
}
