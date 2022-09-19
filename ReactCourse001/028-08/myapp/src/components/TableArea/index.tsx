

import React from "react";
import * as C from "./styles";
import {Item} from "../../types/Item";
import TableItem from "../TableItem";

type Props = {
    list: Item[]
}

const TableArea = ({list}: Props) => {
  return (
      <C.Table>
          <thead>
              <tr>
                <C.TableHeadColunm width={100}>Data</C.TableHeadColunm>
                <C.TableHeadColunm width={130}>Categoria</C.TableHeadColunm>
                <C.TableHeadColunm>Titulo</C.TableHeadColunm>
                <C.TableHeadColunm width={150}>Valor</C.TableHeadColunm>
              </tr>
          </thead>
          <tbody>
            {list.map((item, index)=>(
               <TableItem key={index} item={item}/>
            ))}
          </tbody>
      </C.Table>
  )
};

export default TableArea;
