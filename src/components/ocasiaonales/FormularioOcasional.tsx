"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { formSchema, FormValues } from "../../types/schemas/ocasinalTypes";
import { Card } from "../ui/card";

interface FormularioProps {
  onCalcular: (datos: FormValues) => void;
}

const Formulario: React.FC<FormularioProps> = ({ onCalcular }) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoria: "Auxiliar",
      tipoContrato: "Tiempo Completo",
      postgrado: "Especialización",
      grupoInvestigacion: "A1",
    },
  });

  const onSubmit = (data: FormValues) => {
    onCalcular(data);
  };

  return (
    <div className="flex justify-center items-center mb-4">
      <Card className="space-y-6 p-8 w-full max-w-2xl shadow-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="categoria"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoría</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
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
              control={form.control}
              name="tipoContrato"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de Contrato</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
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
              control={form.control}
              name="postgrado"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postgrado</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
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
              control={form.control}
              name="grupoInvestigacion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grupo de Investigación</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
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
            <Button type="submit" className="w-full">
              Calcular Salario
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default Formulario;
