import React from "react";
import { AlbumItem } from "../AlbumItem";
import * as C from "./styles"


export function AlbumList() {
    return (
        <C.Container>
            <C.Subtitle>Albuns buscados recentemente</C.Subtitle>
            <C.Wrapper>
            <AlbumItem />
            <AlbumItem />
            <AlbumItem />
            <AlbumItem />
            <AlbumItem />
            </C.Wrapper>
        </C.Container>
    )
}