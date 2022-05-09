import React from "react";
import Dados from "./Dados";

export default function Corpo() {
    const cnl = () => {
        return 'aprendendo react'
    }
    
    const yt = 'pesquisando'
    const crs = 'react e js'
 
    const somar = (v1,v2) => {
        return v1+v2
    }

    const destaq = {
        color: '#00f',
        fontSize: '3em',
    }
    return (
        <section className='caixa'>
            <h2 style = {{color: '#f00', fontSize: '5em'}}>Curso de React</h2>
            <p style={destaq}>Se inscreva no canal</p>
            <p className='texto'>Ative o sininho</p>
            <a href='youtube.com' target='_blank'>Youtube</a>
            <Dados 
            canal={cnl}
            youtube={yt}
            curso={crs}
            somar={somar}
            />
        </section>
    )
}