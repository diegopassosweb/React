
import React, {useState} from 'react'

function App() {

  // 1111 const [log,setLog]=useState(false)


  // 1111 const mslogin=()=>{
  //   return 'Usuario Logado'
  // }
  // const mslogoff=()=>{
  //   return 'Favor Logar'
  // }
  // const comprimento=() => {
  //   const hora= new Date().getHours()
  //   if(hora >=0 && hora < 13){
  //     return <p>Bom dia!</p>
  //   } else if(hora >= 13 && hora < 18){
  //     return <p>Boa tarde!</p>
  //   } else {
  //     return <p>Boa noite!</p>
  //   }
  // }








  // 22222 const [cor, setCor] =useState(1)

  //   const vermelho = {color:'#f00'}
  //   const verde = {color:'#0f0'}
  //   const azul = {color:'#00f'}

  //   const retCor=(c) =>{
  //     if(c==1){
  //       return vermelho
  //     } else if(c==2){
  //       return verde
  //     } else {
  //       return azul
  //     }
  //   }

  //  const mudaCor=()=>{
  //     setCor(cor+1)
  //     if(cor > 2){
  //       setCor(1)
  //     }
  //   }

  //   setInterval(mudaCor,1000)









    // 3333333 const carros= ['HRV', 'Golf', 'Focus', 'Cruze', 'Argo']
    // const carros = [
    //   {categoria: "Esporte", preco: "110000.00", modelo: "Golf GTI"},
    //   {categoria: "Esporte", preco: "120000.00", modelo: "Camaro"},
    //   {categoria: "SUV", preco: "85000.00", modelo: "HRV"},
    //   {categoria: "SUV", preco: "85000.00", modelo: "T-Cross"},
    //   {categoria: "Utilitario", preco: "120000.00", modelo: "Hillux"},
    //   {categoria: "Utilitario", preco: "90000.00", modelo: "Ranger"}
    // ]
    // const listaCarros = carros.map(
    //   (c,i)=>
    //     <li key={i}>{i} - {c.categoria} - {c.modelo} - R$ {c.preco}</li>
    // )
  
  return (
    <div>

      {/* 3333333 <ul>{listaCarros}</ul> */}









      {/* 2222 <h1 style={retCor(cor)}>Curso React</h1>
      <button onClick={()=>mudaCor()}>Muda Cor</button> */}






      {/* 1111// {comprimento()}
      // <p>{log?mslogin():mslogoff()}</p>
      // <button onClick={()=>setLog(!log)}>{log?'Logoff':'Login'}</button> */}
    </div>
  );
}

export default App;
