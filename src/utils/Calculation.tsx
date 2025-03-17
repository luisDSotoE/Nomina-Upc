export interface Inputs {
  category: string;
  experience: number;
  articulosA: number;
  libros: number;
  maestria: boolean;
  doctorado: boolean;
}

export const calcularSalario = (inputs: Inputs): number => {
  const { category, articulosA, libros, maestria, doctorado } = inputs;

  const puntosPregrado = 178;

  let puntosPosgrado = 0;
  if (maestria) puntosPosgrado += 40;
  if (doctorado) puntosPosgrado += 80;

  puntosPosgrado = Math.min(puntosPosgrado, 140);

  const puntosTitulos = puntosPregrado + puntosPosgrado;

  const puntosCategoria: { [key: string]: number } = {
    Instructor: 37,
    Asistente: 58,
    Asociado: 74,
    Titular: 96,
  };

  const puntosCategoriaValue = puntosCategoria[category];

  const puntosProductividad = articulosA * 15 + libros * 20;

  const puntosTotales =
    puntosTitulos + puntosCategoriaValue + puntosProductividad;

  const valorPunto = 6435;
  const salarioBase = puntosTotales * valorPunto;

  return salarioBase;
};
