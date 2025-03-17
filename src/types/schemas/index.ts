import { z } from "zod";
export const FormSchema = z.object({
  category: z.enum(["Instructor", "Asistente", "Asociado", "Titular"]),
  experience: z.number().min(0),
  articulosA: z.number().min(0),
  libros: z.number().min(0),
  maestria: z.boolean().default(false),
  doctorado: z.boolean().default(false),
});

export type FormData = z.infer<typeof FormSchema>;
