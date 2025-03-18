import { Nomina } from "../../types/schemas/Completed";

interface TablaNominasProps {
  nominas: Nomina[];
}

const TablaNominas: React.FC<TablaNominasProps> = ({ nominas }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Detalle de Nóminas</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">Tipo</th>
            <th className="py-2 px-4 border-b">Salario (SMMLV)</th>
          </tr>
        </thead>
        <tbody>
          {nominas.map((nomina, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{nomina.tipo}</td>
              <td className="py-2 px-4 border-b">${nomina.salario} SMMLV</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaNominas;
