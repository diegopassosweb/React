

import React from "react";
import { Item } from "../../types/Item";
import * as C from "./styles";

type Props = {
    onAdd: (item: Item) => void;
}

const InputArea = ({onAdd}: Props) => {

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2022,10,2),
            category: "food",
            title: "teste",
            value: 250
        }
        onAdd(newItem);
    }
  return (
    <C.Container>
        <button onClick={handleAddEvent}>Adicionar</button>
    </C.Container>
  )
};

export default InputArea;
