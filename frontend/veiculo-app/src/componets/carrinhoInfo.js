import React, { useState } from 'react';
import './carrinhoInfo.css'; // Importando CSS caso você crie um

function CarrinhoInfo() {
    const [dadosVeiculares, setDadosVeiculares] = useState({
        velocidade: '',
        aceleracao: '',
        tempo: '',
        consumoEnergetico: '',
        numeroPercurso: ''
    });

    const [coordenadasPercurso, setCoordenadasPercurso] = useState({
        numeroPercurso: '',
        x: '',
        y: ''
    });

    function atualizarDados() {
        // Simulação de atualização de dados
        setDadosVeiculares({
            velocidade: '60 km/h',
            aceleracao: '3 m/s²',
            tempo: '3.5 horas',
            consumoEnergetico: '1.2 kWh',
            numeroPercurso: '001'
        });

        setCoordenadasPercurso({
            numeroPercurso: '001',
            x: '35.6895',
            y: '139.6917'
        });
    }

    return (
        <div className="carrinho-info">
            <h2>Informações do Carrinho:</h2>
            <div className="info-container">
                <div className="info-column">
                    <h3>Dados Veiculares:</h3>
                    <p><strong>Velocidade:</strong> {dadosVeiculares.velocidade}</p>
                    <p><strong>Aceleração:</strong> {dadosVeiculares.aceleracao}</p>
                    <p><strong>Tempo de Percurso:</strong> {dadosVeiculares.tempo}</p>
                    <p><strong>Consumo Energético:</strong> {dadosVeiculares.consumoEnergetico}</p>
                    <p><strong>Número do Percurso:</strong> {dadosVeiculares.numeroPercurso}</p>
                </div>
                <div className="info-column">
                    <h3>Coordenadas do Percurso:</h3>
                    <p><strong>Número do Percurso:</strong> {coordenadasPercurso.numeroPercurso}</p>
                    <p><strong>X:</strong> {coordenadasPercurso.x}</p>
                    <p><strong>Y:</strong> {coordenadasPercurso.y}</p>
                </div>
            </div>
            <button onClick={atualizarDados}>Atualizar Dados</button>
        </div>
    );
}

export default CarrinhoInfo;
