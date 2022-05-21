import React, {useState, useEffect} from 'react'
import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';


export default function App() {

    const [pagina, setPagina]=useState(0)

    useEffect(
        ()=>{
            const url=window.location.href
            const res=url.split('?')
            setPagina(parseInt(res[1]))
        }
    )

    const linkPaginas=(p)=>{
        // if(p==1){
        //     window.open('http://localhost:3000/?1','_self')
        // } else if(p==2){
        //     window.open('http://localhost:3000/?2','_self')
        // }
    }

    const retornaPag=()=>{
        if(pagina==1){
            return <Pagina1/>
        } else if(pagina==2){
            return <Pagina2/>
        } else {
            return<div>
                    <button onClick={linkPaginas(1)}>Pagina 1</button>
                    <button onClick={linkPaginas(2)}>Pagina 2</button>
                    </div>
        }
    }
  return (
      <>
       {retornaPag()}
      </>
  );
}


