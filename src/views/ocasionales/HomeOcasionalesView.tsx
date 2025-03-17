import { useState } from "react";
import { calcularSalarioTotal } from "../../utils/CalculateOcasional";
import Formulario from "../../components/ocasiaonales/FormularioOcasional";
import Resultado from "../../components/ocasiaonales/ResultOcasional";
import Grafica from "../../components/ocasiaonales/GraficoOcasional";
import { FormValues, Salario } from "../../types/schemas/ocasinalTypes";

export default function HomeOcasionalesView() {
  const [salario, setSalario] = useState<Salario | null>(null);
  const [salariosHistoricos, setSalariosHistoricos] = useState<number[]>([]);

  const handleCalcular = (datos: FormValues) => {
    const nuevoSalario = calcularSalarioTotal(datos);
    setSalario(nuevoSalario);
    setSalariosHistoricos([...salariosHistoricos, nuevoSalario.salarioTotal]);
  };
  return (
    <div className="min-h-screen ">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Profesores Ocasionales - UPC
        </h1>

        <h2 className="text-xl font-semibold mb-6 text-center">
          Ingresa los Datos del Profesor
        </h2>
        <Formulario onCalcular={handleCalcular} />

        {salario && (
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-xl font-semibold mb-6">
              Resultado del Cálculo
            </h2>
            <Resultado salario={salario} />
          </div>
        )}
        {salariosHistoricos.length > 0 && (
          <div className=" p-8 rounded-lg ">
            <Grafica salarios={salariosHistoricos} />
          </div>
        )}
      </div>
    </div>
  );
}
