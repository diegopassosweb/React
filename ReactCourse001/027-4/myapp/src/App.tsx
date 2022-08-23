
import * as C from "./App.styles"
import React,{useState} from "react";
import { Item } from "./types/Item";
import ListItem from "./components/Listitem";
import AddArea from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: "Comprar pao na padaria", done: false},
    {id: 2, name: "Comprar leite na padaria", done: true},
  ]);

  const handleAddtASK = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length +1,
      name: taskName,
      done: false
    })
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddtASK} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>

  )
};

export default App;
