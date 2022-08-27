import React, {ReactNode} from "react";
import * as C from "./styles"

type ReactProps = {
    children: ReactNode
}

export function Default({children}: ReactProps) {
    return (
        <C.Container>
            {children}
        </C.Container>
    )
}