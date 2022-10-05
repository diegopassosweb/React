

import React, { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { Item } from "./types/Item";
import { filteredListByMonth, getCurrenthMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";
import InfoArea from "./components/InfoArea";


const App = () => {
  const [list, setList] = useState(items);
  const [currenthMonth, setCurrenthMonth] = useState(getCurrenthMonth());
  const [filteredlist, setfilteredList] = useState<Item[]>([]);
  const [income, setincome] = useState(0);
  const [expense, setexpense] = useState(0);

  useEffect(() => {
    setfilteredList(filteredListByMonth(list, currenthMonth));
  },[list,currenthMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrenthMonth(newMonth);
  }

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
  },[filteredlist]);

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

      <TableArea list={filteredlist}/>

      </C.Body>
    </C.Container>
  )
};

export default App;
