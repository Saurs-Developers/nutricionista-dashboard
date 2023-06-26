"use client"

import Link from "next/link"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shared/tabs"
import { Typography } from "@/components/shared/typography"
import { AddEvaluationDialog } from "@/components/ui/add-evaluation-dialog"

export default function Evaluation() {
  return (
    <div>
      <Typography weight="bold" variant="h2">
        Samuel Luiz - Acompanhamento
      </Typography>
      <Link className="block underline my-8" href="/dashboard">
        Voltar para a listagem de pacientes
      </Link>
      <Tabs defaultValue="evaluation">
        <TabsList className="flex justify-start">
          <TabsTrigger value="evaluation">Avaliação antropométrica</TabsTrigger>
          <TabsTrigger value="workouts">Treinos</TabsTrigger>
          <TabsTrigger value="diets">Dietas</TabsTrigger>
        </TabsList>
        <TabsContent value="evaluation">
          {/* <EvaluationContent /> */}
          <Typography className="my-5">
            O paciente ainda não possui nenhuma avaliação. Para criar uma,
            utilize o botão abaixo.
          </Typography>
          <AddEvaluationDialog />
        </TabsContent>
        <TabsContent value="workouts">
          <div>Treinos</div>
        </TabsContent>
        <TabsContent value="diets">
          <div>Dietas</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
