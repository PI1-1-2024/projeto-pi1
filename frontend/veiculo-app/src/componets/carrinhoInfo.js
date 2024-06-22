import React, { useState } from 'react';
import './carrinhoInfo.css';
import CarroService from "../service/CarroService";

function CarrinhoInfo() {
    const carroService = new CarroService();
    const [showPercurso, setShowPercurso] = useState(false);
    const [dadosVeiculares, setDadosVeiculares] = useState({
        velocidade: '',
        aceleracao: '',
        tempo: '',
        consumo_energetico: '',
        numero_percurso: ''
    });

    const [coordenadasPercurso, setCoordenadasPercurso] = useState({
        numero_percurso: '',
        x: '',
        y: ''
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
                <h2>Detalhes do Percurso</h2>
                <div className="info-container">
                    <div className="info-column">
                        <h3>Dados Veiculares:</h3>
                        <p><strong>Velocidade:</strong> {dadosVeiculares.velocidade}</p>
                        <p><strong>Aceleração:</strong> {dadosVeiculares.aceleracao}</p>
                        <p><strong>Tempo de Percurso:</strong> {dadosVeiculares.tempo}</p>
                        <p><strong>Consumo Energético:</strong> {dadosVeiculares.consumo_energetico}</p>
                        <p><strong>Número do Percurso:</strong> {dadosVeiculares.numero_percurso}</p>
                    </div>
                    <div className="info-column">
                        <h3>Coordenadas do Percurso:</h3>
                        <p><strong>Número do Percurso:</strong> {coordenadasPercurso.numero_percurso}</p>
                        <p><strong>X:</strong> {coordenadasPercurso.x}</p>
                        <p><strong>Y:</strong> {coordenadasPercurso.y}</p>
                    </div>
                </div>
                <button onClick={() => setShowPercurso(false)}>Voltar</button>
            </div>
        );
    }

    return (
        <div className="carrinho-info">
            <h2>Informações do Carrinho:</h2>
            <input
                type="number"
                value={numeroPercursoInput}
                onChange={e => setNumeroPercursoInput(e.target.value)}
                placeholder="Digite o número do percurso"
            />
            <button onClick={buscarDadosPorNumeroPercurso}>Buscar Percurso</button>
        </div>
    );
}

export default CarrinhoInfo;
