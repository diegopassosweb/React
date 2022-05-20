import React from "react";

export default function Nota(props){
    return (
        <div>
            <legend>Informe a nota: {props.num}</legend>
            <input type="text" value={props.nota} onChange={(e) =>props.setnota(e.target.value)}></input>
        </div>
    )
}


// 1 necessario passar uma props aqui