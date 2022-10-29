import * as C from "./App.styles";
import React, { useEffect, useState } from "react";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { filterListByMonth, getCurrenthMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";

const App = () => {
  const [list, setlist] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrenthMonth());
  const [filteredlist, setfilteredlist] = useState<Item[]>([]);

  useEffect(() => {
    setfilteredlist(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]); //monitorar list e currentmonth

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
