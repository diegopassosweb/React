
import { useState } from 'react';
import './App.css';
import Globais from './components/Globais';
import Info from './components/Info'

function App() {

  const [resumo, setResuomo]=useState(Globais.resumo)

 const gravarResumo=()=>{
    Globais.resumo=resumo;
  }
  const verResumo=()=>{
    alert(Globais.resumo)
  }
  return (
    <>
    < Info />
    <hr/>
    <p>{'Canal: ' + Globais.canal}</p>
    <p>{'Canal: ' + Globais.curso}</p>
    <p>{'Canal: ' + Globais.ano}</p>
    <hr/>
    <input type="text" size="100" value={resumo} onChange={(e)=>setResuomo(e.target.value)} />
    <br></br>
    <button onClick={()=>gravarResumo()}> Gravar Resumo</button>
    <button onClick={()=>verResumo()}> Ver Resumo</button>
    </>
  );
}

export default App;
