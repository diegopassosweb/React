import React, {ReactNode} from "react";
import * as C from "./styles"
import {Imagem} from "./styles"
import Logo from "../../assets/images/spotifylogo.png"


export function Header() {
    return (
        <C.Container>
            <Imagem src={Logo} alt="Logo"/>
        </C.Container>
    )
}