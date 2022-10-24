
import { connected } from "process";
import React, { useState, KeyboardEvent } from "react";
import * as C from "./styles";

type Props = {
    onEnter: (taskName: string) => void
}

const AddArea = ({onEnter}: Props) => {
    const [inputtext, setinputText] = useState("");

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code == "Enter" && inputtext !== "") {
            onEnter(inputtext);
            setinputText("");
        }
    }
  return (
    <C.Container>
        <div className="image">{"+"}</div>
        <input type="text" placeholder="Adicionar tarefa"
        value={inputtext} onChange={ e => setinputText(e.target.value)}
        onKeyUp={handleKeyUp}
        />
    </C.Container>
  )
};

export default AddArea;
