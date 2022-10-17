
import React, { useState } from "react";
import { Item } from "../../types/item";
import * as C from "./styles";

type Props = {
    item: Item
}

const ListItem = ({item}: Props) => {

    const [iscChecked, setisChecked] = useState(item.done);

  return (
    <C.Container done={iscChecked}>
        <input type="checkbox" checked={iscChecked} 
        onChange={e => setisChecked(e.target.checked)} 

        />
        <label htmlFor="">{item.name}</label>
    </C.Container>
  )
};

export default ListItem;
