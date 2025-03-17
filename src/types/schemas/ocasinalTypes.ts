import { z } from "zod";
export type Categoria = "Auxiliar" | "Asistente" | "Asociado" | "Titular";
export type TipoContrato = "Tiempo Completo" | "Medio Tiempo";
export type Postgrado =
  | "Especialización"
  | "Maestría"
  | "Doctorado"
  | "Postdoctorado";
export type GrupoInvestigacion =
  | "A1"
  | "A"
  | "B"
  | "C"
  | "Reconocidos"
  | "Semillero";

export interface DatosProfesor {
  categoria: Categoria;
  tipoContrato: TipoContrato;
  postgrado: Postgrado;
  grupoInvestigacion: GrupoInvestigacion;
}

export interface Salario {
  salarioBase: number;
  bonificacionPostgrado: number;
  bonificacionInvestigacion: number;
  salarioTotal: number;
}

export const formSchema = z.object({
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

export type FormValues = z.infer<typeof formSchema>;
