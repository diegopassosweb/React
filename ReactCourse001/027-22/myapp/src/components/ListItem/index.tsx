
import React, { useState } from "react";
import { Item } from "../../types/Item";
import * as C from "./styles";

type Props = {
    item: Item
}

const ListItem = ({item}: Props) => {
    const [ischecked, setisChecked] = useState(item.done);

  return (
    <C.Container done={ischecked}>
        <input type="checkbox" checked={ischecked}
        onChange={e => setisChecked(e.target.checked)}
        />
        <label htmlFor="">{item.name}</label>
    </C.Container>
  )
};

export default ListItem;
