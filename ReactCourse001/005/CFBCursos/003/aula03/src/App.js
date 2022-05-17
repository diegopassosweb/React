
import './App.css';
import Classe from './components/Classe'
import Carro from './components/Carro'

function App() {
  return (
      <>
        <h1>Componentes de Classe</h1>
     <Classe canal="CFB Cursos"/>
     <Carro fator={1} />
      </>
  );
}

export default App;
