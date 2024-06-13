-- Criação da tabela dados_veiculares com uma restrição UNIQUE no campo numero_percurso

CREATE TABLE dados_veiculares (
id SERIAL PRIMARY KEY,
velocidade DECIMAL NOT NULL,    -- Velocidade em metros por segundo (m/s)
aceleracao DECIMAL NOT NULL,    -- Aceleração em metros por segundo ao quadrado (m/s^2)
tempo DECIMAL NOT NULL,         -- Tempo em segundos (s)
consumo_energetico DECIMAL NOT NULL, -- Consumo energético em joules (J)
numero_percurso INT NOT NULL,
UNIQUE (numero_percurso) -- Garante que cada percurso tenha um número único
);

-- Criação da tabela coordenadas_percurso com uma chave estrangeira referenciando dados_veiculares

CREATE TABLE coordenadas_percurso (
id SERIAL PRIMARY KEY,
numero_percurso INT NOT NULL,
x FLOAT NOT NULL,   -- Coordenada X
y FLOAT NOT NULL,   -- Coordenada Y
FOREIGN KEY (numero_percurso) REFERENCES dados_veiculares (numero_percurso)
);
