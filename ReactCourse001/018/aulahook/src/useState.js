import React, { useState } from "react";
// Toda vez que a pagina é carregada, o conteudo é renderizado novamente.
// Sempre que o state é atualizado, o conteudo é alterado.

const App = () => {
const [count, setCount] = useState(0);
const [theme, setTheme] = useState('dark');
  
  const increment = () => {
  setCount((prevState) => prevState + 1);
    
  };
  return (
    <div>
      {/* <h1>{count}</h1> */}
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default App;
