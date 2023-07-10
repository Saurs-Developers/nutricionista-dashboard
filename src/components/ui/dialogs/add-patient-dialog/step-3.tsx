import { Typography } from "@/components/shared/typography"

export function StepThree() {
  return (
    <div>
      <Typography variant="body">
        Paciente cadastrado com sucesso. Um link de confirmação de conta com
        duração de 24h foi enviado no e-mail do paciente. Caso o paciente não
        acesse o link, o mesmo poderá solicitar um novo pelo aplicativo, através
        da troca de senha. Em 5 segundos a página será atualizada...
      </Typography>
    </div>
  )
}
