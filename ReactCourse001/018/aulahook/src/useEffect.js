import React,{useState, useEffect} from "react";
//useEffect executa alguma coisa quando algo mudar

const App = () => {
    const [resourceType, setResourceType] = useState("posts");
    const [items, setItems] = useState([]);

    // Chamando uma API com ASYNC
    useEffect(() => {
        const fetchResourceTypes = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        const responseJSON = await response.json();

        setItems(responseJSON);
        };

        // fetchResourceTypes();
    }, [resourceType]);

    useEffect(() => {
        // componentDidMount
        console.log("componentDidMount");

        return () => {
            // componentWillUnmount
            console.log("componentWillUnmount")
        }
    },[])
    

    // Chamando uma API
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then((response) => response.json())
        .then((json) => console.log(json));
    }, [resourceType]);
    
    // Com a lista, só executa se o valor mudar [resourceType]
    useEffect(() => {
        console.log("resource type changed");
    },[resourceType])
    


    // Sem a lista, sera executado sempre que o componente for atualizado
    useEffect(() => {
        console.log("resource type updated");
    },)

    const changeResourceType = (resourceType) => {
        setResourceType(resourceType);
    }
  return (
      <div>
          <h1>{resourceType}</h1>
          <div style={{ display: "flex", alignItems: "center" }} >
              <button onClick={() => changeResourceType("posts")}>Posts</button>
              <button onClick={() => changeResourceType("comments")}>Comments</button>
              <button onClick={() => changeResourceType("todos")}>Todos</button>
              </div>

              {items.map((item) => (
                  <p>{item.id}</p>
              ))}
      </div>
  );
};

export default App;
