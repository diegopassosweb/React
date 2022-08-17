
import * as C from "./styles"

import React from "react";

type Props = {
    url: string;
    name: string;
}

const PhotoItem = ({url,name}: Props) => {
  return (
      <C.Container>
          <img src={url} alt={name} />
          {name}
      </C.Container>
  )
};

export default PhotoItem;
