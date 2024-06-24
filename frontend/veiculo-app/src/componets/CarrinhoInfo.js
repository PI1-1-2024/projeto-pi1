import React, { useState } from 'react';
import './carrinhoInfo.css';
import CarroService from "../service/CarroService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBolt, faClock, faBatteryHalf, faRoad } from '@fortawesome/free-solid-svg-icons';

function CarrinhoInfo() {
    const carroService = new CarroService();
    const [showPercurso, setShowPercurso] = useState(false);
    const [dadosVeiculares, setDadosVeiculares] = useState({
        velocidade: 'km/h',
        aceleracao: 'm/s²',
        tempo: 'h',
        consumo_energetico: 'kWh',
        numero_percurso: ''
    });

    const [numeroPercursoInput, setNumeroPercursoInput] = useState('');

    function buscarDadosPorNumeroPercurso() {
        if (!numeroPercursoInput) {
            alert("Por favor, digite um número de percurso válido.");
            return;
        }
        carroService.getCarroById(numeroPercursoInput)
            .then(response => {
                console.log("Dados recebidos:", response.data);
                const { velocidade, aceleracao, tempo, consumo_energetico, numero_percurso } = response.data;
                setDadosVeiculares({ velocidade, aceleracao, tempo, consumo_energetico, numero_percurso });
                setShowPercurso(true);
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }

    if (showPercurso) {
        return (
            <div className="percurso-info">
                <h2 className="titulo-detalhes">Detalhes do Percurso</h2>
                <div className="info-container">
                    <div className="info-column large">
                    </div>
                    <div className="info-column">
                        <h3>Dados Veiculares:</h3>
                        <p><FontAwesomeIcon icon={faTachometerAlt} /> <strong>Velocidade:</strong> {dadosVeiculares.velocidade} km/h</p>
                        <p><FontAwesomeIcon icon={faBolt} /> <strong>Aceleração:</strong> {dadosVeiculares.aceleracao} km/h/s</p>
                        <p><FontAwesomeIcon icon={faClock} /> <strong>Tempo de Percurso:</strong> {dadosVeiculares.tempo} min</p>
                        <p><FontAwesomeIcon icon={faBatteryHalf} /> <strong>Consumo Energético:</strong> {dadosVeiculares.consumo_energetico} kWh</p>
                        <p><FontAwesomeIcon icon={faRoad} /> <strong>Número do Percurso:</strong> {dadosVeiculares.numero_percurso}</p>
                        <button onClick={() => setShowPercurso(false)}>Voltar</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="carrinho-info">
            <h2>Digitar o número do percurso:</h2>
            <input
                type="number"
                value={numeroPercursoInput}
                onChange={e => setNumeroPercursoInput(e.target.value)}
                placeholder="Número do percurso"
            />
            <button onClick={buscarDadosPorNumeroPercurso}>Pesquisar</button>
        </div>
    );
}

export default CarrinhoInfo;
