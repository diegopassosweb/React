import * as C from "./App.styles"
import { useEffect, useState } from "react";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dataFilter";
import { TableArea } from "./components/TableArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMoth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMoth));
  },[list, currentMoth]);


  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* area de informaçoes */}

        {/* area de inserçao */}

        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  )
}

export default App;