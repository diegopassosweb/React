
import React, { useState, KeyboardEvent } from "react";
import * as C from "./styles";

type Props = {
    onEnter: (taskName: string) => void
}

const AddArea = ({onEnter}: Props) => {
    const [inputText, setinputText] = useState("");

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === "Enter" && inputText !== "") {
            onEnter(inputText);
            setinputText("");
        }
    }

  return (
      <C.Container>
          <div className="image">{"+"}</div>
          <input type="text" placeholder="Adicione uma tarefa"
            value={inputText}
            onChange={e=>setinputText(e.target.value)}
            onKeyUp={handleKeyUp}
          />
      </C.Container>
  )
};

export default AddArea;
