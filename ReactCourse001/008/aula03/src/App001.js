
import './App.css';
import Caixa from './components/Caixa';
import Canal from './components/Canal';

function App() {
  return (
      <>
     <Caixa site="youtube.com" >
       <h1>Este é primeiro filho de Caixa</h1>
       <p>Este é o segundo filho de Caixa</p>
       {/* //Adicionar o props ao arquivo Caixa para aparecer os filhos no App */}
     </Caixa>
     
      </>
  );
}

export default App;
