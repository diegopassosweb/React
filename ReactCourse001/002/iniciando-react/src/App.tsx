
import { useState } from "react";
import { Tweet } from "./components/Tweet"
import './App.css';
import { AppRoutes } from "./Routes";

function App() {

  // const [twwets, setTweets] = useState<string[]>([
  //   'Tweet 1',
  //   'Tweet 2',
  //   'Tweet 3',
  //   'Tweet 4',

  // ])
  //   function createTweet() {
  //     setTweets([...twwets, 'Tweet 5'])
  //   }

  return (
      <AppRoutes />

      // <div>
      //  {twwets.map(tweet => {
      //    return <Tweet text={tweet} />
      //  })}
      //   <button 
      //   style={{backgroundColor: '#8256e6',
      //   border: 0,
      //   padding: '5px 12px',
      //   color: '#fff'
      // }} 

      // onClick={createTweet}>
      //   Adicionar tweet
      //   </button>
      // </div>
  );
}

export default App
