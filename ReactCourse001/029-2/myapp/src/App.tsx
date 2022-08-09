import * as C from "./App.styles"
import {Item} from "./types/Item"
import { Category } from "./types/Catergory"
import { categories } from "./data/categories"
import { items } from "./data/items"
import { useState, useEffect } from "react"
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter"
import { TableArea } from "./components/TableArea"

const App = () => {
  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<Item[]>([]);

    useEffect(() =>{
      setFilteredList(filterListByMonth(list, currentMonth));
    },[list, currentMonth])

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        {/* info */}

        {/* inserçao */}

        <TableArea list={filteredList}/>
      
      </C.Body>
    </C.Container>
  )
}
export default App;
