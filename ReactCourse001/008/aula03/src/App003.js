
import './App.css';
import React, {useState} from 'react'

function App() {
    const [nome,setNome] = useState()

    // localStorage.setItem("nome","LOCALSTORAGE")
    // localStorage.getItem("nome","novonome")
    // localStorage.removeItem("nome")

    const armazenar =(chave,valor)=>{
        localStorage.setItem(chave,valor)
    }
    const consultar=(chave)=>{
        alert(localStorage.getItem(chave))
    }
    const apagar=(chave)=>{
        localStorage.removeItem(chave)
    }

  return (
      <>
        <label>Digite um nome</label><br/>
        <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}></input><br/>
        <button onClick={()=>armazenar('ls_nome',nome)}>Gravar Nome</button>
        <button onClick={()=>consultar('ls_nome',nome)}>Ver Nome</button>
        <button onClick={()=>apagar('ls_nome',nome)}>Remover Nome</button>
    
      </>
  );
}

export default App;
