import Banner from "./componets/Banner";
import CarrinhoInfo from "./componets/CarrinhoInfo";
import CarroGrupo from "./componets/CarroGrupo";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Projeto Integrador de Engenharia 1</h1>
                <h2 className="professor-name">Grupo do professor JungPyo</h2>
                <Banner />
            </header>
            <CarrinhoInfo />
            <footer className="footer">
                <div className="footer-content">
                    <p className="footer-title">Integrantes:</p>
                    <div className="columns">
                        <ul>
                            <li>Ana Luíza Fernandes - 211030667</li>
                            <li>Breno Queiroz - 211063069</li>
                            <li>Danilo César - 221031149</li>
                            <li>Luis Eduardo Miranda - 211063200</li>
                            <li>Matheus Barros - 190126515</li>
                            <li>Maria Eduarda Rocha - 211041259</li>
                        </ul>
                        <ul>
                            <li>Milena Baruc - 211062339</li>
                            <li>Nicolas Bomfim - 211062348</li>
                            <li>Tales Rodrigues - 211041295</li>
                            <li>Victor Hugo Rodrigues - 211063256</li>
                            <li>Vinicius Mendes - 211063265</li>
                            <li>Yves Gustavo Ribeiro - 190097043</li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="carro-grupo">
                <CarroGrupo />
            </div>

        </div>
    );
}

export default App;
