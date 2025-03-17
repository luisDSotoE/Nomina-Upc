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

const Grafica: React.FC<GraficaProps> = ({ salarios }) => {
  const data = salarios.map((salario, index) => ({
    mes: `Mes ${index + 1}`,
    salario: salario,
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Evolución del Salario</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis
            dataKey="mes"
            tick={{ fill: "#555" }}
            axisLine={{ stroke: "#ccc" }}
          />
          <YAxis
            tick={{ fill: "#555" }}
            axisLine={{ stroke: "#ccc" }}
            tickFormatter={(value) => `$${value.toFixed(2)}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            formatter={(value) => `$${value}`}
          />
          <Legend
            wrapperStyle={{
              paddingTop: "10px",
            }}
          />
          <Line
            type="monotone"
            dataKey="salario"
            stroke="#6366f1"
            strokeWidth={2}
            activeDot={{ r: 8, fill: "#6366f1" }}
            dot={{ r: 4, fill: "#6366f1" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Grafica;
