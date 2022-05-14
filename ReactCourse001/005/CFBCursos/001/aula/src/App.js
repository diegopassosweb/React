import React, { useState } from 'react'

import Header from './components/Header'
import Corpo from './components/Corpo'
import './App.css'
import Relogio from './components/Relogio'
import Numero from './components/Numero'
import Led from './components/Led'

// import Dados from './components/Dados'

// const cnl = 'aprendendo react'
// const yt = 'pesquisando'
// const crs = 'react e js'

export default function App() {

  const [ num,setNum] = useState(10)
  const [ligado,setLigado] = useState(false)


  return (
    <>
    <p>Valor do state num: {num}</p>
    <Numero num={num} setNum={setNum} />
   <Header />
   <Corpo />
   <Relogio />
   <Led ligado={ligado} setLigado={setLigado} />
   {/* <Dados 
   canal={cnl}
   youtube={yt}
   curso={crs}
  //  canal='CFB' 
  //  youtube='cfbcursos' 
  //  curso='Reactjs' */
  }
  
    </>
  )
  }
