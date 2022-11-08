
import React, { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";
import InfoArea from "./components/InfoArea";
import inputArea from "./components/InputArea";
import InputArea from "./components/InputArea";

const App = () => {

  const [list , setlist] = useState(items);
  const [currenthMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredlist, setfilteredlist] = useState<Item[]>([]);
  const [income, setincome] = useState(0);
  const [expense, setexpense] = useState(0);

  useEffect(() => {
    setfilteredlist(filterListByMonth(list,currenthMonth));
  }, [list, currenthMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
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
  },[filteredlist])

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setlist(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        <InfoArea 
        income={income}
        expense={expense}
        currentMonth={currenthMonth} 
        onMonthChange={handleMonthChange}
         />

  
        <TableArea list={filteredlist} />

       <InputArea onAdd={handleAddItem} />

      </C.Body>
    </C.Container>
  )
};

export default App;
