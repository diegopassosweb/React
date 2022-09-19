
import React, { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { filterListByMonth, getCurrenthMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";


const App = () => {
  const [list, setList] = useState(items);
  const [filteredlist, setfilteredlist] = useState<Item[]>([]);
  const [currenthMonth, setCurrenthMonth] = useState(getCurrenthMonth());
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  useEffect(() => {
    setfilteredlist(filterListByMonth(list, currenthMonth));
  }, [list, currenthMonth]);

  useEffect(() => {
    let incomeCOut = 0;
    let expenseCount = 0;

    for(let i in filteredlist) {
      if(categories[filteredlist[i].category].expense) {
        expenseCount += filteredlist[i].value;
      } else {
        incomeCOut += filteredlist[i].value;
      }
    }

    setIncome(incomeCOut);
    setExpense(expenseCount);

  }, [filteredlist]);

  const handleMonthChange = (newMonth: string) => {
    setCurrenthMonth(newMonth);
  }


  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>


        <InfoArea
        currentMonth={currenthMonth}
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

