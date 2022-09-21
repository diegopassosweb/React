
import React, { useEffect, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { filterListByMonth, getCurrenthMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";
import InfoArea from "./components/InfoArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currenthMonth, setCurrenthMonth] = useState(getCurrenthMonth);
  const [income, setIncome] = useState(0);
  const [expense, setexpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currenthMonth))
  },[list,currenthMonth])

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setexpense(expenseCount);
    
  }, [filteredList])

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
        currenthMonth={currenthMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
        />

        <TableArea list={filteredList} />


      </C.Body>
    </C.Container>
  )
};

export default App;
