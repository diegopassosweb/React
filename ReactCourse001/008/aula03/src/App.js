
import './App.css';

import Carro from './components/Carro'
import { useState } from 'react';


function App() {

  const [carro, setCarro]=useState(true)
  const mostrarOcultar=()=>{
    setCarro(!carro)
  }

  return (
      <>
        <h1>Componentes de Classe</h1>
     {carro ? <Carro fator={1} /> : ''}
   
     <button onClick={()=>mostrarOcultar()}>
      Ocultar
      </button>
     
      </>
  );
}

export default App;
