# 1. Caso de uso:

## 1.1. Iniciar carrinho
### 1.1.2. Breve Descrição:
Este caso de uso descreve como o operador inicia o carrinho na linha de partida para começar o percurso.

### 1.1.3. Atores:
- Operador
### 1.1.4. Fluxo de Eventos:
#### 1.1.4.1. Fluxo Principal:
1. O operador posiciona o carrinho na linha de partida.
2. O trajeto é iniciado.
#### 1.1.4.2. Fluxo Alternativo:
1. Não aplicável.
#### 1.1.4.3. Fluxo de Exceção:
1. Não aplicável.
### 1.1.5. Requisitos Especiais:
1. Não aplicável.
### 1.1.6. Regras de Negócio:
- RN01: O carrinho só pode ser iniciado se estiver corretamente alinhado com a linha de partida.
### 1.1.7. Pré-condições:
- O carrinho está corretamente posicionado na linha de partida.
### 1.1.8. Pós-condições:
- O carrinho começa a percorrer o trajeto.

## 1.2. Percorrer Trajetos
### 1.2.1. Breve Descrição:
Descreve o processo do carrinho percorrendo o trajeto marcado no chão, mantendo o ovo seguro e minimizando o tempo de trajeto.
### 1.2.2. Atores:
- Carrinho
### 1.2.3. Fluxo de Eventos:
#### 1.2.3.1. Fluxo Principal:
1. O carrinho segue a linha no chão.
2. O carrinho completa o trajeto.
#### 1.2.3.2. Fluxo Alternativo:
1. Não aplicável.
#### 1.2.3.3. Fluxo de Exceção:
1. Não aplicável.
### 1.2.4. Requisitos Especiais:
- Não aplicável.
### 1.2.5. Regras de Negócio:
- Não aplicável.
### 1.2.6. Pré-condições:
- Não aplicável.
### 1.2.7. Pós-condições:
- O trajeto é completado com sucesso ou com falha.

## 1.3. Registrar e Analisar Dados
### 1.3.1. Breve Descrição:
O sistema do carrinho coleta dados de desempenho durante o trajeto e os transmite para análise e armazenamento.
### 1.3.2. Atores:
- Sistema de Registro e Análise de Dados
### 1.3.3. Fluxo de Eventos:
#### 1.3.3.1. Fluxo Principal:
1. Dados como trajetória, velocidade, aceleração, tempo de percurso e consumo energético são coletados via Bluetooth.
2. Os dados são enviados ao sistema de análise.
3. O sistema processa e armazena os dados para consulta futura.
#### 1.3.3.2. Fluxo Alternativo:
1. Não aplicável.
#### 1.3.3.3. Fluxo de Exceção:
1. Não aplicável.
### 1.3.4. Requisitos Especiais:
- Capacidade de coletar e transmitir dados.
### 1.3.5 Regras de Negócio:
1. Não aplicável.
### 1.3.6. Pré-condições:
- O carrinho está em operação no trajeto.
### 1.3.7. Pós-condições:
- Dados são coletados, analisados e armazenados adequadamente.
