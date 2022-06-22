import React,{useReducer} from "react";
// useReducer

const reducer = (state, action) => {
    switch(action.type){
        case "increment":
            return{
                counter: state.counter + 1,
            };
            case "decrement":
                return{
                    counter: state.counter -1,
                };
                default:
                    return state;
    }
};

const App = () => {
    const [state,dispatch] = useReducer(reducer, {counter: 0})
  return (
      <div>
          <p>{state.counter}</p>
          <button onClick={() => dispatch({type: "increment"})}>Increment</button>
          <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
      </div>
  )
};

export default App;
