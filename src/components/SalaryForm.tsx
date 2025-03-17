import { useForm } from "react-hook-form";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { FormData, FormSchema } from "../types/schemas";

interface SalaryFormProps {
  onCalculate: (data: FormData) => void;
}

const SalaryForm = ({ onCalculate }: SalaryFormProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      category: "Instructor",
      experience: 0,
      articulosA: 0,
      libros: 0,
      maestria: false,
      doctorado: false,
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    onCalculate(data);
  };

  return (
    <div className="flex justify-center items-center ">
      <Card className="space-y-6 p-8 w-full max-w-2xl shadow-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="category"
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
                      <SelectItem value="Instructor">Instructor</SelectItem>
                      <SelectItem value="Asistente">Asistente</SelectItem>
                      <SelectItem value="Asociado">Asociado</SelectItem>
                      <SelectItem value="Titular">Titular</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
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
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
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
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
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
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
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
              control={form.control}
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
            <Button type="submit" className="w-full">
              Calcular Salario
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default SalaryForm;
