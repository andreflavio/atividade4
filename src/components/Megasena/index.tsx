import React from "react";
import "./index.css";
import trevo from "../../assets/trevo-megasena.png";
import { useLoteria } from "../../hooks";

export default function Megasena() {
  const { megasena } = useLoteria();

  // Verifique se 'megasena' e 'valorEstimadoProximoConcurso' estão definidos antes de acessá-los
  if (!megasena || !megasena.valorEstimadoProximoConcurso) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="mega-bloco-principal">
      <div>
        <div className="mega-bloco-loteria">
          <img src={trevo} alt="" />
          <span className="mega-nome-loteria">MEGA-SENA</span>
        </div>
        <div className="mega-bloco-estimativa">
          <div className="mega-texto-estimativa">
            Estimativa de prêmio do próximo concurso. Sorteio em{" "}
            {megasena.dataProximoConcurso}:
          </div>
          <div className="mega-valor-estimativa">
            {megasena.valorEstimadoProximoConcurso.toLocaleString("pt-Br", {
              style: "currency",
              currency: "BRL",
            })}
          </div>
        </div>
      </div>
      <div className="mega-bloco-direita">
        <div className="mega-linha-bola">
          {megasena.dezenas.map((dezena: string, index: number) => (
            <div className="mega-bola" key={index}>
              {/* Adicionando um zero à esquerda se o número for menor que 10 */}
              {parseInt(dezena) < 10 ? `0${parseInt(dezena)}` : parseInt(dezena)}
            </div>
          ))}
        </div>
        <div className="mega-texto-acumulou">
          {megasena.quantidadeGanhadores === 0
            ? "ACUMULOU!"
            : `${megasena.quantidadeGanhadores} GANHADORES`}
        </div>
        <div className="mega-data-concurso">
          {`Concurso ${megasena.numeroDoConcurso} - ${megasena.dataPorExtenso}`}
        </div>
      </div>
    </div>
  );
}
