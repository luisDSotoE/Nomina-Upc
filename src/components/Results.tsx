import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Label } from "./ui/label";
import { Card } from "./ui/card";

interface ResultsProps {
  salario: number;
  puntos: {
    titulos: number;
    categoria: number;
    productividad: number;
  };
}

const Results: React.FC<ResultsProps> = ({ salario, puntos }) => {
  const data = [
    { name: "Títulos", puntos: puntos.titulos },
    { name: "Categoría", puntos: puntos.categoria },
    { name: "Productividad", puntos: puntos.productividad },
  ];
  console.log(puntos);

  return (
    <Card className="p-6 mt-6">
      <Label className="mb-4 font-bold text-lg">
        Salario Calculado: ${salario.toLocaleString()}
      </Label>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="puntos" fill="#8884d8" />
      </BarChart>
    </Card>
  );
};

export default Results;
