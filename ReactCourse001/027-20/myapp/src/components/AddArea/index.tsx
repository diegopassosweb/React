
import React, { useState, KeyboardEvent } from "react";
import * as C from "./styles";

type Props = {
    onEnter: (taskName: string) => void
}

const AddArea = ({onEnter}: Props) => {

    const [inputext, setinputtext] = useState("");

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === "Enter" && inputext !== "") {
            onEnter(inputext);
            setinputtext("");
        }
    }

  return (
    <C.Container>
        <div className="image">{"+"}</div>
        <input type="text" placeholder="Adicionar tarefa" 
        value={inputext}
        onChange={e => setinputtext(e.target.value)}
        onKeyUp={handleKeyUp}
        />
    </C.Container>
  )
};

export default AddArea;
