import React from "react";
import * as C from "./styles"


export function SearchBar() {
    return (
        <C.Container>
            <label htmlFor="">Busque por artistas,albuns ou musicas</label>
            <input placeholder="Comece a escrever..."  />
        </C.Container>
    )
}