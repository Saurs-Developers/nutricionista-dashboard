import { ComposicaoCorporal } from "@/@types/avaliacao"
import { Formulas } from "@/@types/formulas"

export const tresPregasHomem = (pregas: ComposicaoCorporal, idade: number) => {
  let densidade_corporal

  const soma_dobras = pregas.peitoral + pregas.abdomen + pregas.coxa

  densidade_corporal =
    1.10938 -
    0.0008267 * soma_dobras +
    0.0000016 * Math.pow(soma_dobras, 2) -
    0.0002574 * idade

  const percentual_gordura = 495 / densidade_corporal - 450

  return Number(percentual_gordura.toFixed(2))
}

export const tresPregasMulher = (pregas: ComposicaoCorporal, idade: number) => {
  let densidade_corporal

  const soma_dobras = pregas.suprailiaca + pregas.tricipital + pregas.coxa

  densidade_corporal =
    1.0994921 -
    0.0009929 * soma_dobras +
    0.0000023 * Math.pow(soma_dobras, 2) -
    0.0001392 * idade

  const percentual_gordura = 495 / densidade_corporal - 450

  return Number(percentual_gordura.toFixed(2))
}

export const quatroPregas = (pregas: ComposicaoCorporal) => {
  const soma_dobras =
    pregas.tricipital +
    pregas.suprailiaca +
    pregas.subescapular +
    pregas.abdomen

  const percentual_gordura = soma_dobras * 0.153 + 5.783

  return Number(percentual_gordura.toFixed(2))
}

export const setePregasHomem = (pregas: ComposicaoCorporal, idade: number) => {
  const soma_dobras =
    pregas.peitoral +
    pregas.axilar_media +
    pregas.tricipital +
    pregas.subescapular +
    pregas.abdomen +
    pregas.suprailiaca +
    pregas.coxa

  const densidade_corporal =
    1.112 -
    0.00043499 * soma_dobras +
    0.00000055 * Math.pow(soma_dobras, 2) -
    0.00028826 * idade

  const percentual_gordura = 495 / densidade_corporal - 450

  return Number(percentual_gordura.toFixed(2))
}

export const setePregasMulher = (pregas: ComposicaoCorporal, idade: number) => {
  const soma_dobras =
    pregas.peitoral +
    pregas.axilar_media +
    pregas.tricipital +
    pregas.subescapular +
    pregas.abdomen +
    pregas.suprailiaca +
    pregas.coxa

  const densidade_corporal =
    1.097 -
    0.00046971 * soma_dobras +
    0.00000056 * Math.pow(soma_dobras, 2) -
    0.00012828 * idade

  const percentual_gordura = 495 / densidade_corporal - 450

  return Number(percentual_gordura.toFixed(2))
}

export const gebMulher = (peso: number, altura: number, idade: number) => {
  const geb = 655 + 9.6 * peso + 1.9 * altura - 4.7 * idade

  return geb
}

export const gebHomem = (peso: number, altura: number, idade: number) => {
  const geb = 66 + 13.7 * peso + 5 * altura - 6.8 * idade

  return geb
}

export const get = (geb: number, fa: number) => {
  const get = geb * fa

  return get
}

export const calculaPercentual = (
  sex: string,
  method: Formulas,
  pregas: ComposicaoCorporal,
  age: number,
) => {
  let resultado = 0

  if (sex === "MASCULINO") {
    switch (method) {
      case Formulas["3_PREGAS"]:
        resultado = tresPregasHomem(pregas, age)
        break
      case Formulas["7_PREGAS"]:
        resultado = setePregasHomem(pregas, age)
        break
      case Formulas["4_PREGAS"]:
        resultado = quatroPregas(pregas)
        break
      default:
        resultado = 0
    }
  } else {
    switch (method) {
      case Formulas["3_PREGAS"]:
        resultado = tresPregasMulher(pregas, age)
        break
      case Formulas["7_PREGAS"]:
        resultado = setePregasMulher(pregas, age)
        break
      case Formulas["4_PREGAS"]:
        resultado = quatroPregas(pregas)
        break
      default:
        resultado = 0
    }
  }

  return resultado
}

export const calculaGeb = (
  sex: string,
  weight: number,
  height: number,
  age: number,
) => {
  if (sex === "MASCULINO") {
    return gebHomem(weight, height, age)
  }
  return gebMulher(weight, height, age)
}
