import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import {
  FormField,
  Form,
  FormControl,
  FormLabel,
  FormMessage,
  FormItem,
} from "../ui/form";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import {
  DatosOcasional,
  DatosPlanta,
  OcasionalSchema,
  PlantaSchema,
} from "../../types/schemas/Completed";

interface FormularioProps {
  onCalcular: (datos: DatosPlanta | DatosOcasional, tipo: string) => void;
}

const FormularioCompleted: React.FC<FormularioProps> = ({ onCalcular }) => {
  const [tipoProfesor, setTipoProfesor] = useState<"planta" | "ocasional">(
    "planta"
  );

  const plantaForm = useForm<DatosPlanta>({
    resolver: zodResolver(PlantaSchema),
    defaultValues: {
      category: "Instructor",
      experience: 0,
      articulosA: 0,
      libros: 0,
      maestria: false,
      doctorado: false,
    },
  });

  const ocasionalForm = useForm<DatosOcasional>({
    resolver: zodResolver(OcasionalSchema),
    defaultValues: {
      categoria: "Auxiliar",
      tipoContrato: "Tiempo Completo",
      postgrado: "Especialización",
      grupoInvestigacion: "A1",
    },
  });

  const onSubmitPlanta = (data: DatosPlanta) => {
    onCalcular(data, "planta");
  };

  const onSubmitOcasional = (data: DatosOcasional) => {
    onCalcular(data, "ocasional");
  };

  return (
    <Card className="p-8">
      <h2 className="text-xl font-semibold mb-6">
        Ingresa los Datos del Profesor
      </h2>
      <Select
        onValueChange={(value) =>
          setTipoProfesor(value as "planta" | "ocasional")
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Selecciona el tipo de profesor" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="planta">Profesor de Planta</SelectItem>
          <SelectItem value="ocasional">Profesor Ocasional</SelectItem>
        </SelectContent>
      </Select>

      {tipoProfesor === "planta" ? (
        <Form {...plantaForm}>
          <form
            onSubmit={plantaForm.handleSubmit(onSubmitPlanta)}
            className="space-y-6 mt-6"
          >
            <FormField
              control={plantaForm.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoría</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una categoría" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Instructor">Instructor</SelectItem>
                      <SelectItem value="Asistente">Asistente</SelectItem>
                      <SelectItem value="Asociado">Asociado</SelectItem>
                      <SelectItem value="Titular">Titular</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={plantaForm.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Años de Experiencia</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={plantaForm.control}
              name="articulosA"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Artículos Tipo A</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={plantaForm.control}
              name="libros"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Libros de Investigación</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={plantaForm.control}
              name="maestria"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>¿Tiene Maestría?</FormLabel>
                </FormItem>
              )}
            />
            <FormField
              control={plantaForm.control}
              name="doctorado"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>¿Tiene Doctorado?</FormLabel>
                </FormItem>
              )}
            />
            <Button type="submit">Calcular Salario</Button>
          </form>
        </Form>
      ) : (
        <Form {...ocasionalForm}>
          <form
            onSubmit={ocasionalForm.handleSubmit(onSubmitOcasional)}
            className="space-y-6 mt-6"
          >
            <FormField
              control={ocasionalForm.control}
              name="categoria"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoría</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una categoría" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Auxiliar">Auxiliar</SelectItem>
                      <SelectItem value="Asistente">Asistente</SelectItem>
                      <SelectItem value="Asociado">Asociado</SelectItem>
                      <SelectItem value="Titular">Titular</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={ocasionalForm.control}
              name="tipoContrato"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de Contrato</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un tipo de contrato" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Tiempo Completo">
                        Tiempo Completo
                      </SelectItem>
                      <SelectItem value="Medio Tiempo">Medio Tiempo</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={ocasionalForm.control}
              name="postgrado"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postgrado</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un postgrado" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Especialización">
                        Especialización
                      </SelectItem>
                      <SelectItem value="Maestría">Maestría</SelectItem>
                      <SelectItem value="Doctorado">Doctorado</SelectItem>
                      <SelectItem value="Postdoctorado">
                        Postdoctorado
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={ocasionalForm.control}
              name="grupoInvestigacion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grupo de Investigación</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un grupo de investigación" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="A1">A1</SelectItem>
                      <SelectItem value="A">A</SelectItem>
                      <SelectItem value="B">B</SelectItem>
                      <SelectItem value="C">C</SelectItem>
                      <SelectItem value="Reconocidos">Reconocidos</SelectItem>
                      <SelectItem value="Semillero">Semillero</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Calcular Salario</Button>
          </form>
        </Form>
      )}
    </Card>
  );
};

export default FormularioCompleted;
