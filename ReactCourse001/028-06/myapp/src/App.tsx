
import React, { useState,useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";
import InfoArea from "./components/InfoArea";
import InputArea from "./components/InputArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredlist, setfilteredlist] = useState<Item[]>([])
  const [currentMonth, setcurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setfilteredlist(filterListByMonth(list, currentMonth))
  },[list, currentMonth]);

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

    setIncome(incomeCount);
    setExpense(expenseCount)

  }, [filteredlist])

  const handleMonthChange = (newMonth: string) => {
    setcurrentMonth(newMonth)
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

      <InputArea onAdd={handleAddItem} />

    <InfoArea currenthMonth={currentMonth}
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
