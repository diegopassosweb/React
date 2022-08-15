import {useState, useEffect} from "react";
import * as C from "./App.styles"
import { Item } from "./types/Item";
import { items } from "./data/items";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { getCurrentMonth, filteredListByMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";

const App = () => {
  const [ list, setList ] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<Item[]>([])

  useEffect(() => {
    setFilteredList(filteredListByMonth(list, currentMonth))
  },[list, currentMonth])

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
