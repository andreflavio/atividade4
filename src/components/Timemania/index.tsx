import React from "react";
import trevo from "../../assets/trevo-timemania.png";
import { useLoteria } from "../../hooks";
import Menu from "../Menu"; // Importe o componente Menu

export default function Timemania() {
  const { timemania } = useLoteria();

  // Verifique se 'timemania' e 'valorEstimadoProximoConcurso' estão definidos antes de acessá-los
  if (!timemania || !timemania.valorEstimadoProximoConcurso) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Menu /> {/* Adicione o componente Menu */}
      <div className="timemania-bloco-principal">
        <div>
          <div className="timemania-bloco-loteria">
            <img src={trevo} alt="" />
            <span className="timemania-nome-loteria">TIMEMANIA</span>
          </div>
          <div className="timemania-bloco-estimativa">
            <div className="timemania-texto-estimativa">
              Estimativa de prêmio do próximo concurso. Sorteio em{" "}
              {timemania.dataProximoConcurso}:
            </div>
            <div className="timemania-valor-estimativa">
              {timemania.valorEstimadoProximoConcurso.toLocaleString("pt-Br", {
                style: "currency",
                currency: "BRL",
              })}
            </div>
          </div>
        </div>
        <div className="timemania-bloco-direita">
          <div className="timemania-linha-bola">
            {timemania.dezenas.map((dezena: string, index: number) => (
              <div className="timemania-bola" key={index}>
                {/* Adicionando um zero à esquerda se o número for menor que 10 */}
                {parseInt(dezena) < 10 ? `0${parseInt(dezena)}` : parseInt(dezena)}
              </div>
            ))}
          </div>
          <div className="timemania-texto-acumulou">
            {timemania.quantidadeGanhadores === 0
              ? "ACUMULOU!"
              : `${timemania.quantidadeGanhadores} GANHADORES`}
          </div>
          <div className="timemania-data-concurso">
            {`Concurso ${timemania.numeroDoConcurso} - ${timemania.dataPorExtenso}`}
          </div>
        </div>
      </div>
    </>
  );
}
