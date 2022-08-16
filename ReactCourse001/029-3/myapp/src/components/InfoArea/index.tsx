import React from "react";
import { formatCurrentMonth } from "../../helpers/dateFilter";
import ResumeItem from "../ResumeItem";
import * as C from "./styles"


type Props = {
    currenthMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}
const InfoArea = ({currenthMonth, onMonthChange, income, expense}: Props) => {
    const handlePrevMonth = () => {
        let [year,month] = currenthMonth.split("-");
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1)
        currentDate.setMonth(currentDate.getMonth() -1);
        onMonthChange(`${currentDate.getFullYear()}- ${currentDate.getMonth() + 1}`)
    }

    const handleNextMonth = () => {
        let [year,month] = currenthMonth.split("-");
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1)
        currentDate.setMonth(currentDate.getMonth() +1);
        onMonthChange(`${currentDate.getFullYear()}- ${currentDate.getMonth() + 1}`)
    }
  return (
      <C.Container>
          <C.MonthArea>
            <C.MonthArrow onClick={handlePrevMonth}>{"<"}</C.MonthArrow>
            <C.MonthTitle>{formatCurrentMonth(currenthMonth)}</C.MonthTitle>
            <C.MonthArrow onClick={handleNextMonth}>{">"}</C.MonthArrow>
          </C.MonthArea>
          <C.ResumeArea>
            <ResumeItem title="Receita" value={income} />
            <ResumeItem title="Despesas" value={expense} />
            <ResumeItem
              color={(income - expense) < 0 ? "red" : "green"}
             title="Balanço" value={income - expense}/>
          </C.ResumeArea>
      </C.Container>
  )
};

export default InfoArea;
