

import React, { useState } from "react";
import * as C from "./styles"
import { Item } from "../../types/Item";

type Props = {
    item: Item
}
const ListItem = ({item}: Props) => {

    const [isChecked, setisChecked] = useState(item.done)
  return (
      <C.Container done={isChecked}>
          <input type="checkbox" checked={isChecked}
          onChange={e => setisChecked(e.target.checked)}
          />
          <label htmlFor="">{item.name}</label>
      </C.Container>    
  )
};

export default ListItem;
