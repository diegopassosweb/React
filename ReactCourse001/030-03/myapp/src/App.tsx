
import React,{useState, useEffect} from "react";
import * as C from "./App.styles";
import * as Photos from "./services/photos";
import { Photo } from "./types/Photo";

const App = () => {
  const [loading, setloading] = useState(false);
  const [photos, setphotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      setloading(true);
      setphotos(await Photos.getAll());
      setloading(false);
    }
    getPhotos();
  },[]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        {loading &&
          <C.ScreenWarning>
            <div className="emoji">;D</div>
            <div>Carregando...</div>
           </C.ScreenWarning> 
        }
      </C.Area>
    </C.Container>
  )
};

export default App;
