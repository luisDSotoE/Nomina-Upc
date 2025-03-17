import {
  Categoria,
  DatosProfesor,
  GrupoInvestigacion,
  Postgrado,
  Salario,
  TipoContrato,
} from "../types/schemas/ocasinalTypes";

export const calcularSalarioBase = (
  categoria: Categoria,
  tipoContrato: TipoContrato
): number => {
  const salarios = {
    Auxiliar: { "Tiempo Completo": 2.645, "Medio Tiempo": 1.509 },
    Asistente: { "Tiempo Completo": 3.125, "Medio Tiempo": 1.749 },
    Asociado: { "Tiempo Completo": 3.606, "Medio Tiempo": 1.99 },
    Titular: { "Tiempo Completo": 3.918, "Medio Tiempo": 2.146 },
  };
  return salarios[categoria][tipoContrato];
};

export const calcularBonificacionPostgrado = (postgrado: Postgrado): number => {
  const bonificaciones = {
    Especialización: 0.1,
    Maestría: 0.45,
    Doctorado: 0.9,
    Postdoctorado: 0,
  };
  return bonificaciones[postgrado];
};

export const calcularBonificacionInvestigacion = (
  grupoInvestigacion: GrupoInvestigacion
): number => {
  const bonificaciones = {
    A1: 0.56,
    A: 0.47,
    B: 0.42,
    C: 0.38,
    Reconocidos: 0.33,
    Semillero: 0.19,
  };
  return bonificaciones[grupoInvestigacion];
};

export const calcularSalarioTotal = (datos: DatosProfesor): Salario => {
  const salarioBase = calcularSalarioBase(datos.categoria, datos.tipoContrato);
  const bonificacionPostgrado = calcularBonificacionPostgrado(datos.postgrado);
  const bonificacionInvestigacion = calcularBonificacionInvestigacion(
    datos.grupoInvestigacion
  );
  const salarioTotal =
    salarioBase + bonificacionPostgrado + bonificacionInvestigacion;

  return {
    salarioBase,
    bonificacionPostgrado,
    bonificacionInvestigacion,
    salarioTotal,
  };
};
