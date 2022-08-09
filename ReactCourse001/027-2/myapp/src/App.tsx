import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";


const App = () => {

  const [name, setName] = useState("User");
  // let name = "User";
  const [age, setAge] = useState(90);
  // let age = 90;
  const [bg, setBg] = useState("#ff0000");
  // let bg = "#ff0000";

  const [list, setList] = useState([
    "first list",
    "second list",
    "three list"
  ]);

  const handleClick = () => {
    alert("color changed")
    setBg("#0000ff");
  }

  const handle20 = () => {
    setAge(20);
    setBg("#00FF00");
  }

  const handle90 = () => {
    setAge(90);
    setBg("#FF0000");
  }

  return (
    <div style={{backgroundColor: bg}}>
      <Header name={name} age={age} /> 

      {age === 90 && 
      <button onClick={handle20}>I have 20 years</button>
      }

      {age === 20 &&
      <button onClick={handle90}>I have 90 years old</button>
      }

      <button onClick={handleClick}>Blue color here</button>
      

      <hr />

      <ul>
        {list.map((item, index) =>(
          <li key={index}>{item}</li>
        ))}
      </ul>

      <Footer /> 
    </div>
  )
}

export default App;