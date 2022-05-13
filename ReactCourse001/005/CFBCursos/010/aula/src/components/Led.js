import React from 'react'

import LedVerde from './imgs/verde.jpg'
import LedVermelho from './imgs/vermelho.jpg'

export default function Led(props) {

    const cancelar=(obj)=>{
        return obj.preventDefault()
        //return false
    }

  return (
    <>
    <img style={{width:'50px'}} src={props.ligado?LedVerde:LedVermelho} />
    <button onClick={()=>props.setLigado(!props.ligado)}>{props.ligado?'Desligar':'Ligar'}
    </button>

    <a 
    href='youtube.com' 
    target='_blank'
    onClick={(e)=>cancelar(e)}
    >
    CFB Cursos
    </a>

    
    </>
  );
  }
