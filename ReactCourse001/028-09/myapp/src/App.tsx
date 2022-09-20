
import React, { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { filterListByMonth, getCurrenthMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currenthMonth, setCurrenthMonth] = useState(getCurrenthMonth);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currenthMonth))
  },[list,currenthMonth])

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        <TableArea list={filteredList} />


      </C.Body>
    </C.Container>
  )
};

export default App;
