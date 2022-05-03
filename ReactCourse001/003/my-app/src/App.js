
import './App.css';
import AnotherComponent from './components/AnotherComponent';
import Images from "./components/images";
import FirstComponent from "./components/FirstComponent";
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment  from './components/Fragment';

function App() {
  return (
    <div className="App">
      <h2>Hello React</h2>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond x ={8} y={10} />
      <Fragment />
      {/* <Container>
        <h1>Este é filho do container!</h1>
      </Container> */}
    </div>
  );
}

export default App;
