import logo from './logo.svg';
import './App.css';
import Frases from './components/Frases';
import Produto from './components/Produto';

function App() {

  const nome = "kedsson";

  function soma(a, b) {
    return a + b;
  }

  return (
    <div className="App">
      <h1>My first project</h1>
      <h1>Soma:{soma(5, 8)}</h1>
      <hr></hr>
      <Frases />
      <Produto
        nome="Caneca"
        foto="https://socd.vteximg.com.br/arquivos/ids/182069-1310-1310/Caneca-Glitter-Prata.jpg?v=637753575340900000"
        desc="Uma caneca bem interessante"
      />

    </div>
  );
}

export default App;
