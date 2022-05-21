
import React, {useState} from 'react'
import Tabela from './components/Tabela'
import Peso from './components/Peso'
import Altura from './components/Altura'
import CalcularIMC from './components/CalcularIMC'
import ResultadoIMC from './components/ResultadoIMC'


function App() {


    const [peso, setPeso]=useState(0)
    const [altura,setAltura]=useState(0)
    const [resultado,setResultado]=useState(0)


  return (
      <>
        <Peso p={peso} sp={setPeso} />
        <Altura a={altura} sa={setAltura} />
        <CalcularIMC p={altura} a={altura} sr={setResultado} />
        <ResultadoIMC r={resultado}/>
        <Tabela />
      </>
  );
}

export default App;
