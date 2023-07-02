"use client"

import Link from "next/link"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shared/tabs"
import { Typography } from "@/components/shared/typography"
import { EvaluationContent } from "@/components/ui/evaluation-content"
import { PatientData } from "@/components/ui/patient-data"
import { PatientWorkouts } from "@/components/ui/patient-workouts"

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
          <TabsTrigger value="patient_data">Dados do paciente</TabsTrigger>
        </TabsList>
        <TabsContent value="evaluation">
          <EvaluationContent />
          {/* <Typography variant="body" className="my-5">
            O paciente ainda não possui nenhuma avaliação. Para criar uma,
            utilize o botão abaixo.
          </Typography> */}
          {/* <AddEvaluationDialog /> */}
        </TabsContent>
        <TabsContent value="workouts">
          <PatientWorkouts />
        </TabsContent>
        <TabsContent value="diets">
          <div>Dietas</div>
        </TabsContent>
        <TabsContent value="patient_data">
          <PatientData />
        </TabsContent>
      </Tabs>
    </div>
  )
}
