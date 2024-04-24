// components/Estimativa/index.tsx
import React from "react";

interface EstimativaProps {
  dataProximoConcurso: string;
  valorEstimadoProximoConcurso: number;
}

const Estimativa: React.FC<EstimativaProps> = ({ dataProximoConcurso, valorEstimadoProximoConcurso }) => {
  return (
    <div className="mega-bloco-estimativa">
      <div className="mega-texto-estimativa">
        Estimativa de prêmio do próximo concurso. Sorteio em {dataProximoConcurso}:
      </div>
      <div className="mega-valor-estimativa">
        {valorEstimadoProximoConcurso.toLocaleString("pt-Br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default Estimativa;