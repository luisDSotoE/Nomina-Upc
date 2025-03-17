// Tipo para la nómina
export interface Nomina {
  tipo: string; // "planta" o "ocasional"
  salario: number;
}

import { z } from "zod";

// Esquema para profesores de planta (Decreto 1279)
export const PlantaSchema = z.object({
  category: z.enum(["Instructor", "Asistente", "Asociado", "Titular"]),
  experience: z
    .number()
    .min(0, "Los años de experiencia no pueden ser negativos"),
  articulosA: z.number().min(0, "El número de artículos no puede ser negativo"),
  libros: z.number().min(0, "El número de libros no puede ser negativo"),
  maestria: z.boolean(),
  doctorado: z.boolean(),
});

// Esquema para profesores ocasionales (Acuerdo 006 de 2018)
export const OcasionalSchema = z.object({
  categoria: z.enum(["Auxiliar", "Asistente", "Asociado", "Titular"]),
  tipoContrato: z.enum(["Tiempo Completo", "Medio Tiempo"]),
  postgrado: z.enum([
    "Especialización",
    "Maestría",
    "Doctorado",
    "Postdoctorado",
  ]),
  grupoInvestigacion: z.enum(["A1", "A", "B", "C", "Reconocidos", "Semillero"]),
});

// Tipo para los datos del formulario
export type DatosPlanta = z.infer<typeof PlantaSchema>;
export type DatosOcasional = z.infer<typeof OcasionalSchema>;
