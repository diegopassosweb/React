
import React from "react";
import { Item } from "../../types/Item";
import TableItem from "../TableItem";
import * as C from "./styles";

type Props = {
    list: Item[]
}
const TableArea = ({list}: Props) => {
  return (
   
        <C.Table>
             <thead>
            <tr>
                <C.TableColumn width={100}>Data</C.TableColumn>
                <C.TableColumn width={130}>Categoria</C.TableColumn>
                <C.TableColumn>Titulo</C.TableColumn>
                <C.TableColumn width={150}>Valor</C.TableColumn>
            </tr>
        </thead>
        <tbody>
            {list.map((item,index) => (
                <TableItem key={index} item={item}/>
            ))}
        </tbody>
        </C.Table>
    
  )
};

export default TableArea;
