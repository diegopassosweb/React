
import React, { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { filterListByMonth, getCurrenthMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";

const App = () => {
  const [list, setList] = useState(items);
  const [currenthMonth, setCurrenthMonth] = useState(getCurrenthMonth());
  const [filteredlist, setfilteredlist] = useState<Item[]>([]);

  useEffect(() => {
    setfilteredlist(filterListByMonth(list, currenthMonth));
  }, [list, currenthMonth]);

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
};

export default App;
