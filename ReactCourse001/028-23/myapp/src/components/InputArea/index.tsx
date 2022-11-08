
import React from "react";
import { Item } from "../../types/Item";
import * as C from "./styles"

type Props = {
    onAdd: (item: Item) => void;
}


const InputArea = ({onAdd}: Props) => {

    const handleADDevent = () => {
        let newItem: Item = {
            date: new Date(2022,10,1),
            category: "food",
            title: "teste",
            value: 250
        };
        onAdd(newItem);
    }
    
  return (
    <C.Container>
        <button onClick={handleADDevent}>Adicionar</button>
    </C.Container>
  )
};

export default InputArea;
