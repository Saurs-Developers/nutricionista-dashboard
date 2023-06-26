"use client"

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

import { Box } from "@/components/shared/box"
import { Input } from "@/components/shared/input"
import { Typography } from "@/components/shared/typography"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../shared/select"

export function EvaluationContent() {
  const data = [
    {
      name: "Peso atual",
      porcentagem: 81.15,
    },
    {
      name: "Peso Gordo",
      porcentagem: 11.52,
    },
    {
      name: "Peso Magro",
      porcentagem: 69.63,
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
            <Input readOnly label="Tórax" placeholder="78cm" />
            <Input readOnly label="Cintura" placeholder="76cm" />
            <Input readOnly label="Abdômem" placeholder="78cm" />
            <Input readOnly label="Quadril" placeholder="101cm" />
            <Input readOnly label="Antrebraço D." placeholder="29cm" />
            <Input readOnly label="Antrebraço E." placeholder="29cm" />
            <Input readOnly label="Braço D." placeholder="37cm" />
            <Input readOnly label="Braço E." placeholder="36cm" />
            <Input readOnly label="Coxa D." placeholder="60cm" />
            <Input readOnly label="Coxa E." placeholder="61cm" />
            <Input readOnly label="Panturrilha D." placeholder="40cm" />
            <Input readOnly label="Panturrilha E." placeholder="40cm" />
          </div>
        </Box>
        <Box className="col-span-6">
          <Typography variant="h4">Composição corporal</Typography>
          <div className="grid grid-cols-4 mt-3 gap-4">
            <Input readOnly label="Coxa" placeholder="78cm" />
            <Input readOnly label="Abdominal" placeholder="76cm" />
            <Input readOnly label="Supra ilíaca" placeholder="78cm" />
            <Input readOnly label="Peitoral" placeholder="101cm" />
            <Input readOnly label="Axilar-média" placeholder="29cm" />
            <Input readOnly label="Bicepital" placeholder="29cm" />
            <Input readOnly label="Tricepital" placeholder="37cm" />
            <Input readOnly label="Subscapular" placeholder="36cm" />
            <Input readOnly label="Total" placeholder="60cm" />
          </div>
        </Box>
        <Box className="col-span-4">
          <Typography variant="h4">Resultados</Typography>
          <div className="grid grid-cols-3 mt-3 gap-4">
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Selecionar cálculo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fórmulas</SelectLabel>
                  <SelectItem value="apple">Harris bennedict</SelectItem>
                  <SelectItem value="banana">3 Dobras</SelectItem>
                  <SelectItem value="blueberry">Não lembro kk</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input readOnly label="Peso atual" placeholder="78cm" />
            <Input readOnly label="Gordura" placeholder="76cm" />
            <Input readOnly label="Peso magro" placeholder="78cm" />
            <Input readOnly label="Peso gordo" placeholder="101cm" />
            <Input readOnly label="GEB" placeholder="29cm" />
            <Input readOnly label="GET" placeholder="29cm" />
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
              <Bar dataKey="porcentagem" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </main>
    </div>
  )
}
