import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface GraficaProps {
  salarios: number[];
}

const GraficaCompleted: React.FC<GraficaProps> = ({ salarios }) => {
  const data = salarios.map((salario, index) => ({
    mes: `Mes ${index + 1}`,
    salario: salario,
  }));

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Evolución de la Nómina</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="salario"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficaCompleted;
