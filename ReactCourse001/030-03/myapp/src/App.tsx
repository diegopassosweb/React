
import React,{useState, useEffect, FormEvent} from "react";
import * as C from "./App.styles";
import { PhotoItem } from "./components/PhotoItem";
import * as Photos from "./services/photos";
import { Photo } from "./types/Photo";

const App = () => {
  const [loading, setloading] = useState(false);
  const [photos, setphotos] = useState<Photo[]>([]);
  const [uploading, setuploading] = useState(false);

  useEffect(() => {
    const getPhotos = async () => {
      setloading(true);
      setphotos(await Photos.getAll());
      setloading(false);
    }
    getPhotos();
  },[]);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("image") as File;

    if(file && file.size > 0) {
      setuploading(true);
      let result = await Photos.insert(file);
      setuploading(false);

      if(result instanceof Error) {
        alert(`${result.name} - ${result.message}`)
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setphotos(newPhotoList);
      }
    }
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="Enviar" />
          {uploading && "Enviando..."}
        </C.UploadForm>

        {loading &&
          <C.ScreenWarning>
            <div className="emoji">;D</div>
            <div>Carregando...</div>
           </C.ScreenWarning> 
        }

        {!loading && photos.length > 0 &&
        <C.PhotoList>
          {photos.map((item,index) => (
            <PhotoItem key={index} url={item.url} name={item.name} />
          ))}
        </C.PhotoList>
        }

        {!loading && photos.length === 0 &&
          <C.ScreenWarning>
          <div className="emoji">):</div>
          <div>Não ha fotos cadastradas.</div>
         </C.ScreenWarning> 
        }
      </C.Area>
    </C.Container>
  )
};

export default App;
