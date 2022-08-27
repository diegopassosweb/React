import React from "react";
import * as C from "./styles"


export function AlbumItem() {
    return (
        <C.Container>
            <C.Imagem src="https://via.placeholder.com/160/170"/>
           <C.Title>Nome do album</C.Title>
           <C.Description>Nome do artista</C.Description>
        </C.Container>
    )
}