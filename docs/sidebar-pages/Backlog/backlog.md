# Histórico de Revisão
|Data|Versão|Descrição|Autores|
|----|------|---------|-------|
|30/05/2024|0.1|Primeira versão do Backlog do Produto|[Ana Luíza Fernandes](https://github.com/analufernanndess)

# 1. Backlog do Produto:
O Backlog do Produto é um artefato da metodologia ágil SCRUM, que consiste em uma lista dos requisitos funcionais emergentes para o desenvolvimento do produto. O escopo do projeto foi delimitado a partir da necessidade de criar um novo sistema de gerenciamento para uma otica. O objetivo é entregar um produto profissional com um custo abaixo do mercado, focado na agilidade em gerenciar cliente,produtos e vendas.

## 2. Requisitos Funcionais:

|N°|Classificação|Requisitos Funcionais|
|--|-------------|---------------------|
|RF01|Requisito de Gerenciamento de Dados|Persistir informações como trajetória percorrida, tempo de percurso e consumo energético no PostgreSQL|
|RF02|Requisito de Interface de Comunicação|Receber dados da ESP|
|RF03|Requisito de Interface de Usuário|Apresentar dados no dashboard: Trajetória percorrida, tempo de percurso e consumo energético|


## 3. Requisitos não funcionais:
Os requisitos não funcionais (RNFs) definem os atributos do sistema, como segurança, confiabilidade, desempenho, capacidade de manutenção, usabilidade. Eles servem como restrições ou constrangimentos no design do sistema em diferentes pendências.


|N°|Classificação|Requisitos Não Funcionais|
|--|-------------|-------------------------|
|RNF01|Requisitos de Implementação|A parte do Back-End do sistema deve ser desenvolvido em JavaScript/Nest.js|
|RNF02|Requisitos de Implementação|A parte do Front-End do sistema deve ser desenvolvido em React|
|RNF03|Requisitos de Implementação|O sistema utilizará o Banco de Dados PostgreSQL|
|RNF04|Requisitos de Portabilidade|O sistema deverá ser hospedado na nuvem|
|RFN05|Requisitos de Suportabilidade|O sistema deve ser testável em JavaScript e React|
|RNF06|Requisitos de interoperabilidade|Converter dados recebidos da ESP para o JSON|
|RNF07|Requisitos de Desempenho e Escabilidade|O sistema deve receber os dados de forma de assíncrona|
