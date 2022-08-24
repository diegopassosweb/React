import * as C from "./App.styles"
import React,{useState} from "react";
import { Item } from "./types/Item";
import ListItem from "./components/Listitem";
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: "Comprar pao na padaria", done: false},
    {id: 2, name: "Comprar bolo na padaria", done: true}
  ])

  const handleAddTask = (taskname: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskname,
      done: false,
    })
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de Tarefas
        </C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item,index) => (
        <ListItem key={index} item={item}/>
      ))}

      </C.Area>
    </C.Container>
  )
};

export default App;
