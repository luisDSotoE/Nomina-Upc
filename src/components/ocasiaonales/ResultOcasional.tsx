import { Salario } from "../../types/schemas/ocasinalTypes";

interface ResultadoProps {
  salario: Salario;
}

const Resultado: React.FC<ResultadoProps> = ({ salario }) => {
  return (
    <div>
      <h2>Salario Base: {salario.salarioBase} SMMLV</h2>
      <h2>Bonificación por Postgrado: {salario.bonificacionPostgrado} SMMLV</h2>
      <h2>
        Bonificación por Investigación: {salario.bonificacionInvestigacion}{" "}
        SMMLV
      </h2>
      <h2>Salario Total: {salario.salarioTotal} SMMLV</h2>
    </div>
  );
};

export default Resultado;
