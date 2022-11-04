

import React from "react";
import * as C from "./styles";

type Props = {
    value: number;
    title: string;
    color?: string;
}

const ResumeItem = ({value, title, color}: Props) => {
  return (
    <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={color}>{value}</C.Info>
    </C.Container>
    
  )
};

export default ResumeItem;
