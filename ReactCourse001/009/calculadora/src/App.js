
import React, {useState} from 'react'

export default function App() {

  const [valorTela, setValorTela]=useState('')
  const [resultado,setresultado]=useState(0)
  const [acumulador,setAcumulador]=useState(0)
  const [operado,setoperado]=useState(false)

  // COMPONENTES
 
  const tela=(valor,res)=>{
    return (
      <div style={csstela}>
        <span style={csstelaoper}>{valor}</span>
        <span style={cssRes}>{res}</span>
      </div>
    )
  }

  const Btn=(label,onClick)=>{
    return(
      <button style={cssBtn} onClick={onClick}>{label}</button>
    )
  }

  // FUNÇOES
  const addDigitotela=(d)=>{
    if((d=='+' || d=='-' || d=='*' || d=='/') && operado){
      setoperado(false)
      setValorTela(resultado+d)
      return
    }
    if(operado){
      setValorTela(d)
      setoperado(false)
      return
    }
    const valorDigitadoTela=valorTela+d
    setValorTela(valorDigitadoTela)
  }

  const limparMemoria=()=>{
    setoperado(false)
    setValorTela('')
    setresultado(0)
    setAcumulador(0)
    return
  }

  const operacao=(oper)=>{
    if(oper=='bs'){
      let vtela=valorTela
      vtela=vtela.substring(0,(vtela.length-1))
      setValorTela(vtela)
      setoperado(false)
      return
    }
    try{
      const r=eval(valorTela)
      setAcumulador(r)
      setresultado(r)
      setoperado(true)
    }catch{
      setresultado('ERRO')
    }
  }

  //ESTILOS
  const cssContainer={
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'column',
    width:300,
    border:'1px solid #000'
  }
  const cssBotoes={
    flexDirection:'row',
    flexWrap:'wrap'
  }
  const csstela={
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent:'center',
    alignItems:'flex-start',
    backgroundColor:'#444',
    flexDirection:'column',
    width:260
  }
  const csstelaoper={
      fontSize:25,
      color:'#fff',
      height:20
    }

    const cssRes={
      fontSize: 50,
      color:'#fff'
    }
    const cssBtn={
      fontSize:30,
      height:75,
      width: 75,
      padding: 20,
      backgroundColor:'#000',
      color:'#fff',
      borderColor:'#000',
      textAlign:'center',
      outline:'none'

    }

    return (
      <>
        <div style={cssContainer}>
          <h3>Calculadora Matematica simples</h3>
          {tela(valorTela,resultado)}
          <div style={cssBotoes}>
            {Btn('AC',limparMemoria)}
            {Btn('(',()=>addDigitotela('('))}
            {Btn(')',()=>addDigitotela(')'))}
            {Btn('/',()=>addDigitotela('/'))}
            {Btn('7',()=>addDigitotela('7'))}
            {Btn('8',()=>addDigitotela('8'))}
            {Btn('9',()=>addDigitotela('9'))}
            {Btn('*',()=>addDigitotela('*'))}
            {Btn('4',()=>addDigitotela('4'))}
            {Btn('5',()=>addDigitotela('5'))}
            {Btn('6',()=>addDigitotela('6'))}
            {Btn('-',()=>addDigitotela('-'))}
            {Btn('1',()=>addDigitotela('1'))}
            {Btn('2',()=>addDigitotela('2'))}
            {Btn('3',()=>addDigitotela('3'))}
            {Btn('+',()=>addDigitotela('+'))}
            {Btn('0',()=>addDigitotela('0'))}
            {Btn('.',()=>addDigitotela('.'))}
            {Btn('<-',()=>operacao('bs'))}
            {Btn('=',()=>operacao('='))}
          </div>
        </div>
      </>
    );
  
  }





