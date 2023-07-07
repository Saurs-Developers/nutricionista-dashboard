async function getData() {
  const res = await fetch(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
  )
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function Dashboard() {
  const data = await getData()

  console.log(data)

  return (
    <div>
      {/* <Typography weight="bold" variant="h2">
        Pacientes
      </Typography> */}
      {/* <PatientsNavBar states={data} /> */}
      {/* <PatientList /> */}
      {/* <Typography variant="body" className="mt-5">
        Você não possui nenhum paciente cadastrado.
      </Typography> */}
    </div>
  )
}
