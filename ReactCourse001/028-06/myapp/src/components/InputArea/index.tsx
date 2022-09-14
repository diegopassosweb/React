
import React from "react";
import { Item } from "../../types/Item";
import * as C from "./styles";

type Props = {
    onAdd: (item: Item) => void;
}

const InputArea = ({onAdd}: Props) => {

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2022, 9,27),
            category: "food",
            title: "Item teste",
            value: 250.23
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
