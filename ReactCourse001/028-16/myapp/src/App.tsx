
import React, { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { Item } from "./types/Item";
import { filterListByMonth, getCurrenthMonth } from "./helpers/dateFilter";
import ListItem from "./components/TableItem";
import TableArea from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredlist, setFilteredlist] = useState<Item[]>([]);
  const [currenthMonth, setCurrenthMonth] = useState(getCurrenthMonth());
  const [expense, setexpense] = useState(0);
  const [income, setincome] = useState(0);

  useEffect(() => {
    setFilteredlist(filterListByMonth(list, currenthMonth));
  },[list, currenthMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrenthMonth(newMonth);
  }

  useEffect(() => {

    let expenseCount = 0;
    let incomecOUNT = 0;

    for(let i in filteredlist) {
      if(categories[filteredlist[i].category].expense) {
        expenseCount += filteredlist[i].value;
      } else {
        incomecOUNT += filteredlist[i].value;
      }
    }
    setincome(incomecOUNT);
    setexpense(expenseCount)
  },[filteredlist])

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        <InfoArea currenthMonth={currenthMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
        />

        <TableArea list={filteredlist} />

      </C.Body>
    </C.Container>
  )
};

export default App;
