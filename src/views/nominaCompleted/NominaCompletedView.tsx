import { useState } from "react";
import { calcularSalario, Inputs } from "../../utils/Calculation";
import { calcularSalarioTotal } from "../../utils/CalculateOcasional";
import { Nomina } from "../../types/schemas/Completed";
import TablaNominas from "../../components/nominaCompleted/TableNomina";
import GraficaCompleted from "../../components/nominaCompleted/Grafica";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import SalaryForm from "../../components/SalaryForm";
import Formulario from "../../components/ocasiaonales/FormularioOcasional";
import { FormValues, Salario } from "../../types/schemas/ocasinalTypes";
import Results from "../../components/Results";
import Resultado from "../../components/ocasiaonales/ResultOcasional";
import Grafica from "../../components/ocasiaonales/GraficoOcasional";

export default function NominaCompletedView() {
  const [tipoProfesor, setTipoProfesor] = useState<"planta" | "ocasional">(
    "planta"
  );
  const [salarioOcasional, setSalarioOcasional] = useState<Salario | null>(
    null
  );
  const [salariosHistoricos, setSalariosHistoricos] = useState<number[]>([]);

  const [salarioPlanta, setSalarioPlanta] = useState<number>(0);
  const [puntos, setPuntos] = useState({
    titulos: 0,
    categoria: 0,
    productividad: 0,
  });

  const [nominas, setNominas] = useState<Nomina[]>([]);
  const [nominasHistoricas, setNominasHistoricas] = useState<number[]>([]);

  const handleCalculate = (inputs: Inputs) => {
    const salarioCalculado = calcularSalario(inputs);
    setSalarioPlanta(salarioCalculado);
    setPuntos({
      titulos: 178 + (inputs.maestria ? 40 : 0) + (inputs.doctorado ? 80 : 0),
      categoria: { Instructor: 37, Asistente: 58, Asociado: 74, Titular: 96 }[
        inputs.category
      ]!,
      productividad: inputs.articulosA * 15 + inputs.libros * 20,
    });

    setNominas([...nominas, { tipo: "planta", salario: salarioCalculado }]);
    setNominasHistoricas([...nominasHistoricas, salarioCalculado]);
  };

  const handleCalcular = (datos: FormValues) => {
    const nuevoSalario = calcularSalarioTotal(datos);
    setSalarioOcasional(nuevoSalario);
    setSalariosHistoricos([...salariosHistoricos, nuevoSalario.salarioTotal]);

    setNominas([
      ...nominas,
      { tipo: "ocasional", salario: nuevoSalario.salarioTotal },
    ]);
    setNominasHistoricas([...nominasHistoricas, nuevoSalario.salarioTotal]);
  };

  const nóminaTotal = nominas.reduce(
    (total, nomina) => total + nomina.salario,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Simulación de Nómina Docente Completa - UPC
        </h1>
        <div className="flex justify-center items-center mb-4">
          <Select
            onValueChange={(value) =>
              setTipoProfesor(value as "planta" | "ocasional")
            }
          >
            <SelectTrigger>
              <SelectValue
                placeholder="Selecciona el tipo de profesor"
                style={{ color: "black" }}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="planta">Profesor de Planta</SelectItem>
              <SelectItem value="ocasional">Profesor Ocasional</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {tipoProfesor === "planta" ? (
          <>
            <SalaryForm onCalculate={handleCalculate} />
            {salarioPlanta > 0 && (
              <Results salario={salarioPlanta} puntos={puntos} />
            )}
          </>
        ) : (
          <>
            <Formulario onCalcular={handleCalcular} />
            {salarioOcasional && (
              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-xl font-semibold mb-6">
                  Resultado del Cálculo
                </h2>
                <Resultado salario={salarioOcasional} />
              </div>
            )}
            {salariosHistoricos.length > 0 && (
              <div className="p-8 rounded-lg">
                <Grafica salarios={salariosHistoricos} />
              </div>
            )}
          </>
        )}

        {nominas.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Nómina Total</h2>
            <p className="text-2xl font-bold text-blue-800">
              ${nóminaTotal} SMMLV
            </p>
          </div>
        )}

        {nominas.length > 0 && <TablaNominas nominas={nominas} />}
        {nominasHistoricas.length > 0 && (
          <GraficaCompleted salarios={nominasHistoricas} />
        )}
      </div>
    </div>
  );
}
