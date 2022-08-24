import { useState, KeyboardEvent } from "react"
import * as C from "./styles"

type Props = {
    onEnter: (taskaname: string) => void
}

export const AddArea = ({onEnter}: Props) => {

    const [inputText, setinputText] = useState("");

    const handleKeyUP = (e: KeyboardEvent) => {
        console.log(e.code);
        if(e.code === 'Enter' && inputText !== '') {
                onEnter(inputText);
                setinputText("");
        }
    }
    return (
        <C.Container>
            <div className="image">{"+"}</div>
            <input type="text" placeholder="Adicionar tarefa"
            value={inputText}
            onChange={e => setinputText(e.target.value)}
            onKeyUp={handleKeyUP}
            />
        </C.Container>
    )
}