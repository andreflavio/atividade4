// components/Acumulou/index.tsx
import React from "react";

interface AcumulouProps {
  quantidadeGanhadores: number;
}

const Acumulou: React.FC<AcumulouProps> = ({ quantidadeGanhadores }) => {
  return (
    <div className="mega-texto-acumulou">
      {quantidadeGanhadores === 0 ? "ACUMULOU!" : `${quantidadeGanhadores} GANHADORES`}
    </div>
  );
};

export default Acumulou;