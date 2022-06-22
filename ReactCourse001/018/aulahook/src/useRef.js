import React, {useEffect, useState,useRef} from "react";
// useRef assim como useState, 
//guarda um valor mas quando é atualizado o componente nao é renderizado novamente

const App = () => {
    const [name, setName] =useState("");
    const previousName = useRef();

    useEffect(() => {
        previousName.current = name;
    },[name]);


  return (
      <div>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <p>Hello! My name is {name}</p>
          <p>And my name was {previousName.current}</p>
          
      </div>
  );
};

export default App;
