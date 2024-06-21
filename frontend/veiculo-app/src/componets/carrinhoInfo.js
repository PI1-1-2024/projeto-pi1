import React, { useState } from 'react';
import './carrinhoInfo.css';
import CarroService from "../service/CarroService";

function CarrinhoInfo() {
        var carroService = new CarroService();
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
        carroService.getCarroById(numeroPercursoInput)  // Adapte esta URL conforme necessário
            .then(response => {
                const { velocidade, aceleracao, tempo, consumo_energetico, numero_percurso } = response.data;
                setDadosVeiculares({ velocidade, aceleracao, tempo, consumo_energetico, numero_percurso });
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }

    return (
        <div className="carrinho-info">
            <h2>Informações do Carrinho:</h2>
            <input
                className="carrinho-info"
                type="number"
                value={numeroPercursoInput}
                onChange={e => setNumeroPercursoInput(e.target.value)}
                placeholder="Digite o número do percurso"
            />
            <button className="carrinho-info " onClick={buscarDadosPorNumeroPercurso}>Buscar Percurso</button>
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
                    <p><strong>Número do Percurso:</strong> {coordenadasPercurso.numeroPercurso}</p>
                    <p><strong>X:</strong> {coordenadasPercurso.x}</p>
                    <p><strong>Y:</strong> {coordenadasPercurso.y}</p>
                </div>
            </div>
        </div>
    );
}

export default CarrinhoInfo;
