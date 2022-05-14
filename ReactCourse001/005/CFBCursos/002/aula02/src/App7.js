import React, {useState} from 'react'
import Nota from './components/Nota7'
import Resultado from './components/Resultado7'

export default function App(){
        const [nota1, setnota1] = useState(0)
        const [nota2, setnota2] = useState(0)
        const [nota3, setnota3] = useState(0)
        const [nota4, setnota4] = useState(0)
    return (
        <>
    <Nota num={1} nota={nota1} setnota={setnota1} />
    <Nota num={2} nota={nota2} setnota={setnota2}/>
    <Nota num={3} nota={nota3} setnota={setnota3}/>
    <Nota num={4} nota={nota4} setnota={setnota4}/>
    <Resultado somaNotas={parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)}/>
        </>
    );
}