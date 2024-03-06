import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import FunctionSimples from './exemplos/FunctionSimples';
import FunctionDupla from './exemplos/FunctionDupla';
import Button from './Componentes/Button';

function App() {

  const [useEffectCounter, SetUseEffectCounter] = useState(0);
  const [logado, setLogado] = useState(false)

  useEffect(() => {
    console.log("useeffect foi chamado");
    SetUseEffectCounter(useEffectCounter + 1)

  }, [logado]);

  const Logar = () => {
    setLogado(true);
  }

  const Deslogar = () => {
    setLogado(false);
  }

  return (
    <div className="App">
      <h1>O useEffect foi chamado {useEffectCounter} vezes</h1>
      {logado ? <p>Estou logado</p> : <p>Estou Deslogado</p>}
      <Button tarefa={Logar} className="button blue" > Logar </Button>
      <div>
        <FunctionSimples></FunctionSimples>
        <FunctionDupla></FunctionDupla>
      </div>
    </div>
  );
}

export default App;
