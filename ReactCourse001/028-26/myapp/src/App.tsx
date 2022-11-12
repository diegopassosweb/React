
import React, { useEffect, useState } from "react";
import * as C from "./App.styles";
import { items } from "./data/items";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { filteredListByMonth, getCurrentMonth } from "./helpers/dataFilter";
import TableArea from "./components/TableArea";

const App = () => {
  const [list, setlist] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredlist, setfilteredlist] = useState<Item[]>([]);

  useEffect(() => {
    setfilteredlist(filteredListByMonth(list, currentMonth));
  }, [list, currentMonth]);

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
