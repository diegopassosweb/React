
import * as C from "./styles"
import React, { useState } from "react";
import { Item } from "../../types/Item";

type Props = {
    item: Item
}

const ListItem = ({item}: Props) => {

    const [isChcked, setisChecked] = useState(item.done)

  return (
      <C.Container done={isChcked}>
          <input type="checkbox" checked={isChcked}
          onChange={e=> setisChecked(e.target.checked)}
           />
          <label htmlFor="">{item.name}</label>
      </C.Container>
  )
};

export default ListItem;
