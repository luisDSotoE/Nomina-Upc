import { useState } from "react";
import SalaryForm from "../../components/SalaryForm";
import { calcularSalario, Inputs } from "../../utils/Calculation";
import Results from "../../components/Results";

export default function HomeView() {
  const [salario, setSalario] = useState<number>(0);
  const [puntos, setPuntos] = useState({
    titulos: 0,
    categoria: 0,
    productividad: 0,
  });

  const handleCalculate = (inputs: Inputs) => {
    const salarioCalculado = calcularSalario(inputs);
    setSalario(salarioCalculado);
    setPuntos({
      titulos: 178 + (inputs.maestria ? 40 : 0) + (inputs.doctorado ? 80 : 0),
      categoria: { Instructor: 37, Asistente: 58, Asociado: 74, Titular: 96 }[
        inputs.category
      ]!,
      productividad: inputs.articulosA * 15 + inputs.libros * 20,
    });
  };

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-2xl mx-auto">
        <SalaryForm onCalculate={handleCalculate} />
        {salario > 0 && <Results salario={salario} puntos={puntos} />}
      </div>
    </div>
  );
}
