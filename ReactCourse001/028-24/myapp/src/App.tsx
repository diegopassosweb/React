
import React, { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";

const App = () => {
    const [list, setlist] = useState(items);
    const [currentMonth, setcurrentMonth] = useState(getCurrentMonth());
    const [filteredlist, setfiteredlist] = useState<Item[]>([]);

    useEffect(() => {
      setfiteredlist(filterListByMonth(list,currentMonth));
    }, [list, currentMonth])

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

      <TableArea list={filteredlist}/>
      </C.Body>
    </C.Container>
  )
}

export default App;
