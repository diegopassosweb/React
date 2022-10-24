
import React, { useState } from "react";
import * as C from "./App.styles";
import AddArea from "./components/AddArea";
import ListItem from "./components/ListItem";
import { Item } from "./types/Item";

const App = () => {
  const [list, setlist] = useState<Item[]>([
    {id: 1, name: "ir a padaria", done: false},
    {id: 2, name: "ir ao mercado", done: false}
  ])

  const handleAddTask = (TaskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: TaskName,
      done: false,
    })
    setlist(newList);
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
