import {useState} from "react";
import Footer from "./components/Footer";
import { Header } from "./components/Header";


const App = () => {
  const [name, setName] = useState("usuario")
  const [age, setAge] = useState(90)
  const [bg, setBg] = useState("#FF00B830")

  const [list, setList] = useState([
    "primeira lista",
    "segunda lista",
    "terceira lista"
  ]);

  const handleClick = () => {
   setBg("#FF8999")
  }
  const idade90 = () => {
    setAge(90)
    setBg("#000FF2")
  }
  const idade20 = () => {
    setAge(20)
    setBg("#FF00B830")
  }
  return (
      <div style={{backgroundColor: bg}}>
        <Header name={name} age={age} /> 

        {age === 90 &&
          <button onClick={idade20}>Tinha essa idade</button>
        }

        {age === 20 &&
          <button onClick={idade90}>Tenho essa idade</button>
        }

        <button onClick={handleClick}>Clique aqui</button>

        <hr />

        <ul>
          {list.map((item, index) =>(
            <li key={index}>{item}</li>
          ))}
        </ul>
        {/* A fucão map vai em cada item de um array especifico e executa uma função naquele item */}
        <Footer />

      </div>
  )
}
//funcão anonima dentro de uma constante
// const App = () => {
//   return (
     
//   )
// }




export default App;