
import React, { useEffect, useState } from "react";
import * as C from "./App.styles"
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";
import {InfoArea} from "./components/InfoArea";

const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

    useEffect(() =>{
      setFilteredList(filterListByMonth(list, currentMonth));
    },[list, currentMonth])

    const handleMonthChange = (newMonth: string) => {
      setCurrentMonth(newMonth);
    }

    useEffect(() => {
      let incomeOut = 0;
      let expenseOut = 0;

      for(let i in filteredList) {
        if(categories[filteredList[i].category].expense) {
          expenseOut += filteredList[i].value;
        } else {
          incomeOut += filteredList[i].value;
        }
      }

      setIncome(incomeOut);
      setExpense(expenseOut);
    },[filteredList])

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
      
    <InfoArea currentMonth={currentMonth}
    onMonthChange={handleMonthChange}
    income={income}
    expense={expense}
    />

    <TableArea list={filteredList}/>

      </C.Body>
    </C.Container>
  )
};

export default App;
