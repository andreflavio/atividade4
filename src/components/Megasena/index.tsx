// components/Megasena/index.tsx
import React from "react";
import trevo from "../../assets/trevo-megasena.png";
import { useLoteria } from "../../hooks";
import Carregando from "../Carregando";
import NomeLoteria from "../Principal/Esquerda/NomeLoteria";
import Data from "../Principal/Direita/Data";
import Acumulou from "../Principal/Direita/Acumulou";
import Resultado from "../Principal/Direita/Resultado";
import Estimativa from "../Principal/Esquerda/Estimativa";
import Menu from "../Menu"; // Importe o componente Menu aqui


const Megasena: React.FC = () => {
  const { megasena } = useLoteria();

  if (!megasena || !megasena.valorEstimadoProximoConcurso) {
    return <Carregando />;
  }

  return (
    <div className="mega-bloco-principal">
      <Menu /> {/* Use o componente Menu aqui */}
      <div>
        <div className="mega-bloco-loteria">
          <img src={trevo} alt="" />
          <NomeLoteria />
        </div>
        <Estimativa 
          dataProximoConcurso={megasena.dataProximoConcurso}
          valorEstimadoProximoConcurso={megasena.valorEstimadoProximoConcurso}
        />
      </div>
      <div className="mega-bloco-direita">
        <Resultado dezenas={megasena.dezenas} />
        <Acumulou quantidadeGanhadores={megasena.quantidadeGanhadores} />
        <Data data={`Concurso ${megasena.numeroDoConcurso} - ${megasena.dataPorExtenso}`} />
      </div>
    </div>
  );
};

export default Megasena;
