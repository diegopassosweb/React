import React from 'react'

export default function Caixa(props){
    return (
        <>
        <p>{props.site}</p>
        {props.children[0]}
      {/*  {props.children}  imprime todos os filhos de caixa */}
        <p>Testando Caixa</p>
        </>
    );
}