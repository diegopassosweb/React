
import React, { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { filteredByMonth, getCurrenthMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";


const App = () => {
  const [list, setlist] = useState(items);
  const [filteredlist, setfilteredlist] = useState<Item[]>([])
  const [currenthMonth, setCurrentMonth] = useState(getCurrenthMonth());

  useEffect(() => {
    setfilteredlist(filteredByMonth(list, currenthMonth));
  }, [list, currenthMonth]);

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
