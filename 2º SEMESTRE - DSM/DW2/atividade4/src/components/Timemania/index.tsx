import "./index.css";
import trevo from "../../assets/trevo-timemania.png";
import { useLoteria } from "../../hooks";

export default function Timemania(){
    const { timemania } = useLoteria();
    
    return (
        <div className="timemania-bloco-principal">
            <div>
                <div className="timemania-bloco-loteria">
                    <img src={trevo} alt="" />
                    <span className="timemania-nome-loteria">TIMEMANIA</span>
                </div>
                <div className="timemania-bloco-estimativa">
                    <div className="timemania-texto-estimativa"> 
                        Estimativa de prêmio do próximo concurso. 
                        Sorteio em {timemania.dataProximoConcurso}:
                    </div>
                    <div className="timemania-valor-estimativa"> 
                        {timemania.valorEstimadoProximoConcurso.toLocaleString("pt-Br",{
                            style: "currency",
                            currency: "BRL"
                        })}
                    </div>
                </div>
            </div>
            <div className="timemania-bloco-direita">
                <div className="timemania-linha-bola">
                    {
                        timemania.dezenas.map( dezena =>
                                <div className="timemania-bola" key={dezena}>{dezena}</div>
                             )
                    }
                </div>
                <div className="timemania-texto-acumulou">
                    {
                        timemania.quantidadeGanhadores === 0 ? 
                        "ACUMULOU!" :
                        `${timemania.quantidadeGanhadores} GANHADORES`
                    }
                </div>
                <div className="timemania-data-concurso">
                    {
                        `Concurso ${timemania.numeroDoConcurso} - ${timemania.dataPorExtenso}`
                    }
                </div>
            </div>
        </div>
    );
}