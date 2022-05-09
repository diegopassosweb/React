import React from 'react'
import Logo from './components/imgs/logo.png'
import Header from './components/Header'
import Corpo from './components/Corpo'
import './App.css'

// import Dados from './components/Dados'

// const cnl = 'aprendendo react'
// const yt = 'pesquisando'
// const crs = 'react e js'

export default function App() {

  return (
    <>
   <Header />
   <Corpo />
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
