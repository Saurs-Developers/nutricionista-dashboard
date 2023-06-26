import Link from "next/link"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shared/tabs"
import { Typography } from "@/components/shared/typography"

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
          <div>Avaliação</div>
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
