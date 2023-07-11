"use client"

import { useEffect, useState } from "react"
import { formatDistanceStrict } from "date-fns"
import { Zap } from "lucide-react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { Avaliacao } from "@/@types/avaliacao"
import { Cliente } from "@/@types/clientes"
import { Formulas } from "@/@types/formulas"
import { Box } from "@/components/shared/box"
import { Input } from "@/components/shared/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/select"
import { Typography } from "@/components/shared/typography"
import { calculaGeb, calculaPercentual } from "@/utils/formulas"

export function EvaluationContent({
  evaluation,
  cliente,
}: {
  cliente: Cliente
  evaluation: Avaliacao
}) {
  const total =
    evaluation.composicao_corporal.coxa +
    evaluation.composicao_corporal.abdomen +
    evaluation.composicao_corporal.suprailiaca +
    evaluation.composicao_corporal.peitoral +
    evaluation.composicao_corporal.axilar_media +
    evaluation.composicao_corporal.bicepital +
    evaluation.composicao_corporal.tricipital +
    evaluation.composicao_corporal.subescapular

  const idade = parseInt(
    formatDistanceStrict(new Date(cliente.data_nascimento), new Date(), {
      unit: "year",
    }),
  )

  const geb = calculaGeb(
    cliente.sexo,
    evaluation.peso,
    evaluation.altura,
    idade,
  ).toFixed(2)

  const [formula, setFormula] = useState<Formulas>(Formulas["3_PREGAS"])
  const [percentual, setPercentual] = useState(
    calculaPercentual(
      cliente.sexo,
      formula,
      evaluation.composicao_corporal,
      idade,
    ),
  )

  const pesoGordo = (evaluation.peso * (percentual / 100)).toFixed(2)

  const pesoMagro = (evaluation.peso - Number(pesoGordo)).toFixed(2)

  const get = (Number(geb) * evaluation.fator_atv_fisica).toFixed(2)

  useEffect(() => {
    setPercentual(
      calculaPercentual(
        cliente.sexo,
        formula,
        evaluation.composicao_corporal,
        idade,
      ),
    )
  }, [formula])

  const data = [
    {
      name: "Peso atual",
      kg: evaluation.peso,
    },
    {
      name: "Peso Gordo",
      kg: pesoGordo,
    },
    {
      name: "Peso Magro",
      kg: pesoMagro,
    },
  ]

  return (
    <div className="mt-7">
      <header className="flex items-center gap-2">
        <Typography variant="h4" weight="bold">
          Ultimate
        </Typography>
        <Zap size={24} />
      </header>
      <main className="grid grid-cols-12 gap-5 mt-4">
        <Box className="col-span-6">
          <Typography variant="h4">Perímetros</Typography>
          <div className="grid grid-cols-4 mt-3 gap-4">
            <Input
              value={evaluation.perimetro.torax + "cm"}
              readOnly
              label="Tórax"
            />
            <Input
              value={evaluation.perimetro.cintura + "cm"}
              readOnly
              label="Cintura"
            />
            <Input
              value={evaluation.perimetro.abdominal + "cm"}
              readOnly
              label="Abdômem"
            />
            <Input
              value={evaluation.perimetro.quadril + "cm"}
              readOnly
              label="Quadril"
            />
            <Input
              value={evaluation.perimetro.antebraco_d + "cm"}
              readOnly
              label="Antrebraço D."
            />
            <Input
              value={evaluation.perimetro.antebraco_e + "cm"}
              readOnly
              label="Antrebraço E."
            />
            <Input
              value={evaluation.perimetro.braco_d + "cm"}
              readOnly
              label="Braço D."
            />
            <Input
              value={evaluation.perimetro.braco_e + "cm"}
              readOnly
              label="Braço E."
            />
            <Input
              value={evaluation.perimetro.coxa_d + "cm"}
              readOnly
              label="Coxa D."
            />
            <Input
              value={evaluation.perimetro.coxa_e + "cm"}
              readOnly
              label="Coxa E."
            />
            <Input
              value={evaluation.perimetro.panturrilha_d + "cm"}
              readOnly
              label="Panturrilha D."
            />
            <Input
              value={evaluation.perimetro.panturrilha_e + "cm"}
              readOnly
              label="Panturrilha E."
            />
          </div>
        </Box>
        <Box className="col-span-6">
          <Typography variant="h4">Composição corporal</Typography>
          <Select
            value={formula}
            onValueChange={setFormula as (value: string) => void}
          >
            <SelectTrigger className="col-span-3 mt-3">
              <SelectValue placeholder="Selecionar cálculo" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fórmulas</SelectLabel>
                <SelectItem value={Formulas["3_PREGAS"]}>
                  3 Pregas - Jackson & Pollock
                </SelectItem>
                <SelectItem value={Formulas["4_PREGAS"]}>
                  4 pregas - Faulkner
                </SelectItem>
                <SelectItem value={Formulas["7_PREGAS"]}>
                  7 pregas - Jackson, Pollock & Ward
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="grid grid-cols-4 mt-3 gap-4">
            <Input
              value={evaluation.composicao_corporal.coxa}
              readOnly
              label="Coxa"
            />
            <Input
              value={evaluation.composicao_corporal.abdomen}
              readOnly
              label="Abdominal"
            />
            <Input
              value={evaluation.composicao_corporal.suprailiaca}
              readOnly
              label="Supra ilíaca"
            />
            <Input
              value={evaluation.composicao_corporal.peitoral}
              readOnly
              label="Peitoral"
            />
            <Input
              value={evaluation.composicao_corporal.axilar_media}
              readOnly
              label="Axilar-média"
            />
            <Input
              value={evaluation.composicao_corporal.bicepital}
              readOnly
              label="Bicepital"
            />
            <Input
              value={evaluation.composicao_corporal.tricipital}
              readOnly
              label="Tricepital"
            />
            <Input
              value={evaluation.composicao_corporal.subescapular}
              readOnly
              label="Subscapular"
            />
            <Input
              value={evaluation.composicao_corporal.subescapular}
              readOnly
              label="Panturrilha"
            />
            <Input
              value={evaluation.composicao_corporal.subescapular}
              readOnly
              label="Opcional 1"
            />
            <Input
              value={evaluation.composicao_corporal.subescapular}
              readOnly
              label="Opcional 2"
            />
            <Input value={total} readOnly label="Total" placeholder="86" />
          </div>
        </Box>
        <Box className="col-span-4">
          <Typography variant="h4">Resultados</Typography>
          <div className="grid grid-cols-3 mt-3 gap-4">
            <Input value={evaluation.peso + "kg"} readOnly label="Peso atual" />
            <Input value={percentual + "%"} readOnly label="Gordura" />
            <Input value={pesoMagro + "kg"} readOnly label="Peso magro" />
            <Input value={pesoGordo + "kg"} readOnly label="Peso gordo" />
            <Input value={geb} readOnly label="GEB (kcal)" />
            <Input value={get} readOnly label="GET (kcal)" />
          </div>
        </Box>
        <Box className="col-span-4 shadow-md rounded-md h-full max-h-[272px]">
          <Typography variant="h4">Gráfico</Typography>
          <ResponsiveContainer className="mt-3" width="100%" height="88%">
            <BarChart width={500} height={500} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis width={32} />
              <Tooltip />
              <ReferenceLine y={0} stroke="#000" />
              <Bar dataKey="kg" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </main>
    </div>
  )
}
