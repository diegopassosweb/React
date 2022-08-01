import React from 'react';
import * as C from "./App.styles"
import * as Photos from "./services/photos"
import { useState, useEffect } from 'react';
import { Photo } from './types/Photo';

function App() {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true)
      setPhotos(await Photos.getAll())
      setLoading(false)
    }
    getPhotos();

  },[])
  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Galeria de Fotos
        </C.Header>

        {/*Area de upload  */}

        {loading &&
        <C.ScreenWarning>
          <div className="emoji">*..**..*</div>
          <div>Carregando...</div>
        </C.ScreenWarning>
        }

        {!loading && photos.length > 0 &&
        <C.PhotoList>
          {photos.map((item, index) =>(
            <div>{item.name}</div>
          ))}
        </C.PhotoList>
        }

        {!loading && photos.length == 0 &&
           <C.ScreenWarning>
           <div className="emoji">:(</div>
           <div>Nao ha fotos cadastradas...</div>
         </C.ScreenWarning>
        }
      </C.Area>
    </C.Container>
  );
}

export default App;
