
import React, { useState } from "react";
import * as C from "./App.styles"
import ListItem from "./components/ListItem";
import AddArea from "./components/AddArea";
import { Item } from "./types/Item";

const App = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: "ir a padaria", done: false},
    {id: 2, name: "ir ao mercado", done: false},
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length +1,
      name: taskName,
      done: false,
    })
    setList(newList)
  }
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  )
};

export default App;
