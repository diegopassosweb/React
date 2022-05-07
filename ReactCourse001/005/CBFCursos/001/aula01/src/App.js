import React from 'react'
import Logo from './components/imgs/logo.png'

export default function App() {
  const canal = () => {
    return ('CFB Cursos em um retorno com arrow function')
  }
  function cursox() {
    return 'Curso de React 2 feito com função'
  }
  const curso = `Curso de React simples const`  
  return (
    <section>
      <header>
      <p>{`Canal: ` + canal()}</p>
      <br/>
      <p>{curso}</p>
      <p>{cursox()}</p>
      </header>

      <section>
        <img src={Logo}/>
        <img src={'/img/publics.jpg'}/>
      </section>
    </section>
  )
  }
