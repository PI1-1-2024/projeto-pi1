-- Criação da tabela dados_veiculares com uma restrição UNIQUE no campo numero_percurso

CREATE TABLE dados_veiculares (
id SERIAL PRIMARY KEY,
velocidade DECIMAL NOT NULL, 
aceleracao DECIMAL NOT NULL,  
tempo DECIMAL NOT NULL,     
consumo_energetico DECIMAL NOT NULL, 
nome_percurso VARCHAR(255) NOT NULL, 
data_criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
UNIQUE (nome_percurso)              
);


-- Criação da tabela coordenadas_percurso com uma chave estrangeira referenciando dados_veiculares

CREATE TABLE coordenadas_percurso (
id SERIAL PRIMARY KEY,
numero_percurso INT NOT NULL,
x FLOAT NOT NULL,   -- Coordenada X
y FLOAT NOT NULL,   -- Coordenada Y
FOREIGN KEY (numero_percurso) REFERENCES dados_veiculares (numero_percurso)
);
