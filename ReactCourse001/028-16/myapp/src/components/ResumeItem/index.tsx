
import React from "react";
import * as C from "./styles";

type Props = {
    title: string;
    value: number;
    color?: string;
}

const ResumeItem = ({title, value, color}: Props) => {
  return (
      <C.Container>
          <C.Title> {title} </C.Title>
          <C.info color={color} >R$ {value}</C.info>
      </C.Container>
  )
};

export default ResumeItem;
