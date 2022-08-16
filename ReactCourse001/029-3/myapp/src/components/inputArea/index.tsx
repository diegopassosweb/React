
import * as C from "./styles"
import React from "react";
import { Item } from "../../types/Item";

type Props = {
    onAdd: (item: Item) => void;
}

const InputArea = ({onAdd}: Props) => {

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2022, 7, 27),
            category: "food",
            title: "Item de teste",
            value: 250.25
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
