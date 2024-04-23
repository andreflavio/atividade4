import React from "react";
import "./index.css";
import trevo from "../../assets/trevo-quina.png";
import { useLoteria } from "../../hooks";

export default function Quina() {
  const { quina } = useLoteria();

  // Verifique se 'quina' e 'valorEstimadoProximoConcurso' estão definidos antes de acessá-los
  if (!quina || !quina.valorEstimadoProximoConcurso) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="quina-bloco-principal">
      <div>
        <div className="quina-bloco-loteria">
          <img src={trevo} alt="" />
          <span className="quina-nome-loteria">QUINA</span>
        </div>
        <div className="quina-bloco-estimativa">
          <div className="quina-texto-estimativa">
            Estimativa de prêmio do próximo concurso. Sorteio em{" "}
            {quina.dataProximoConcurso}:
          </div>
          <div className="quina-valor-estimativa">
            {quina.valorEstimadoProximoConcurso.toLocaleString("pt-Br", {
              style: "currency",
              currency: "BRL",
            })}
          </div>
        </div>
      </div>
      <div className="quina-bloco-direita">
        <div className="quina-linha-bola">
          {quina.dezenas.map((dezena: string, index: number) => (
            <div className="quina-bola" key={index}>
              {/* Adicionando um zero à esquerda se o número for menor que 10 */}
              {parseInt(dezena) < 10 ? `0${parseInt(dezena)}` : parseInt(dezena)}
            </div>
          ))}
        </div>
        <div className="quina-texto-acumulou">
          {quina.quantidadeGanhadores === 0
            ? "ACUMULOU!"
            : `${quina.quantidadeGanhadores} GANHADORES`}
        </div>
        <div className="quina-data-concurso">
          {`Concurso ${quina.numeroDoConcurso} - ${quina.dataPorExtenso}`}
        </div>
      </div>
    </div>
  );
}
