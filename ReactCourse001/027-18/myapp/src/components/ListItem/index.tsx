
import { useState } from "react";
import { Item } from "../../types/item";
import * as C from "./styles";

type Props = {
    item: Item
}

const ListItem = ({item}: Props) => {
    const [ischecked, setischecked] = useState(item.done);

  return (
    <C.Container done={ischecked}>
        <input type="checkbox" checked={ischecked} 
        onChange={e => setischecked(e.target.checked)} />

        <label>{item.name}</label>
    </C.Container>
  )
};

export default ListItem;
