
import React from "react";
import * as C from "./styles";
import {Item} from "../../types/Item"

type Props = {
    list: Item[]
}

const TableArea = ({list}: Props) => {
  return (
      <C.Table>
          <thead>
              <tr>
                  <C.TableHeadColum width={150}>Data</C.TableHeadColum>
                  <C.TableHeadColum width={120}>Categoria</C.TableHeadColum>
                  <C.TableHeadColum>Titulo</C.TableHeadColum>
                  <C.TableHeadColum width={130}>Valor</C.TableHeadColum>
              </tr>
          </thead>
          <tbody>
            {list.map((item,index) => (
                <tr key={index}>
                    <td></td>
                    <td></td>
                    <td>{item.title}</td>
                    <td></td>
                </tr>
            ))}
          </tbody>
      </C.Table>
  )
};

export default TableArea;
