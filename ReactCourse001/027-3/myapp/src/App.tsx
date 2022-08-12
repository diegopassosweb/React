import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  
  const [name, setName] = useState("user")
  const [age, setAge] = useState(90);
  const [bg, setBg] = useState("#FF0000");

  const [list, setList] = useState([
    "list 1",
    "list 2",
    "list 3",
  ])

  const handleClick = () => {
    setBg("#0000FF");
  }
  
  const handle20 = () => {
    setAge(20);
    setBg("#FF0000");
  }

  const handle90 = () => {
    setAge(90);
    setBg("#00FF00");
  }
  return (
  <div style={{backgroundColor:bg}}>
    <Header name={name} age={age}/> 

    {age === 90 && 
      <button onClick={handle20}>I have 20 years</button>
    }

    {age === 20 &&
      <button onClick={handle90}>I have 90 years</button>
    }

    <button onClick={handleClick}>Change color here</button>
    
    <hr/>

    <ul>
      {list.map((item, index) =>(
        <li key={index}>{item}</li>
      ))}
    </ul>
    

  
    <Footer />
  </div>
  
  );
}

export default App;
