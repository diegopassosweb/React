
import React, { useState,useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredlist, setfilteredlist] = useState<Item[]>([])
  const [currentMonth, setcurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setfilteredlist(filterListByMonth(list, currentMonth))
  },[list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

      <TableArea list={filteredlist} />
      </C.Body>
    </C.Container>
  )
};

export default App;
