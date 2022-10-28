
import React, { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/item";
import { items } from "./data/items";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { filteredListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";
import InfoArea from "./components/InfoArea";

const App = () => {
  const [list, setlist] = useState(items);
  const [currenthMonth, setCurrenthMonth] = useState(getCurrentMonth());
  const [filteredlist, setfilteredlist] = useState<Item[]>([]);
  const [income, setincome] = useState(0);
  const [expense, setexpense] = useState(0);

  useEffect(() => {
    setfilteredlist(filteredListByMonth(list, currenthMonth));
  }, [list, currenthMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredlist) {
      if(categories[filteredlist[i].category].expense) {
        expenseCount += filteredlist[i].value;
      } else {
        incomeCount += filteredlist[i].value;
      }
    }
    setincome(incomeCount);
    setexpense(expenseCount);
  }, [filteredlist])

  const handleMonthChange = (newMonth: string) => {
    setCurrenthMonth(newMonth);

  }

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
