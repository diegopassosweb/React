
import Header from "./Header"
import Content from './Content';
import Footer from './Footer';
import {useState} from "react";
import AddItem from "./AddItem";

function App() {
  const [items, setItems] = useState([
    {
    id:1,
    checked:true,
    item: "Primeiro object"
    },
    {
      id:2,
      checked:false,
      item: "Segundo object"
      },

      {
        id:3,
        checked:false,
        item: "Terceiro object"
        },
]);

const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? { ...item, 
  checked: !item.checked} : item);
  setItems(listItems);
  localStorage(listItems);
  localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  //console.log(`key: ${id}`)
}
  const handleDelete = (id) => {
    //console.log(id)
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  return (
    <div className="App">
     <Header title="Grocery List" />
     <AddItem />
     <Content 
     items={items} 
     handleCheck={handleCheck}
     handleDelete={handleDelete}
     />
     <Footer length={items.length}/>
    </div>
  );
}

export default App;
