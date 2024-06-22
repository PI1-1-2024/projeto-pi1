import Banner from "./componets/Banner";
import CarrinhoInfo from "./componets/carrinhoInfo";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Projeto Integrador de Engenharia 1</h1>
                <Banner />
            </header>
            <CarrinhoInfo />
            <footer className="footer">
                Integrantes: Ana Luíza Fernandes, Breno Queiroz, Danilo César, Luis Eduardo Miranda, Matheus Barros, Milena Baruc, Nicolas Bonfim, Tales Rodrigues, Victor Hugo Rodrigues, Vinívius Mendes, Yves Gustavo Ribeiro
            </footer>
        </div>
    );
}

export default App;
