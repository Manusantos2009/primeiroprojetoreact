import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
      <button onClick={Logar}>Logar</button>
      <button onClick={Deslogar}>Deslogar</button>
    </div>
  );
}

export default App;
