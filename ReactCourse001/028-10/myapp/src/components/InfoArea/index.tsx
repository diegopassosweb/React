
import React from "react";
import { formatCurrenthMonth } from "../../helpers/dateFilter";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";

type Props = {
    currenthMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

const InfoArea = ({currenthMonth, onMonthChange, expense, income}: Props) => {
    const handlePrevMonth = () => {
        let [year,month] = currenthMonth.split("-");
        let currenthDate = new Date(parseInt(year), parseInt(month) -1,1);
        currenthDate.setMonth(currenthDate.getMonth() -1);
        onMonthChange(`${currenthDate.getFullYear()} - ${currenthDate.getMonth() + 1}`);
    }
    const handleNextMonth = () => {
        let [year,month] = currenthMonth.split("-");
        let currenthDate = new Date(parseInt(year), parseInt(month) -1,1);
        currenthDate.setMonth(currenthDate.getMonth() +1);
        onMonthChange(`${currenthDate.getFullYear()} - ${currenthDate.getMonth() + 1}`);
    }
  return (
      <C.Container>
          <C.MonthArea>
            <C.MonthArrow onClick={handlePrevMonth}>{"<"}</C.MonthArrow>
            <C.MonthTitle>{formatCurrenthMonth(currenthMonth)}</C.MonthTitle>
            <C.MonthArrow onClick={handleNextMonth}>{">"}</C.MonthArrow>
          </C.MonthArea>
        <C.ResumeArea>
        <ResumeItem title="Receita" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem title="Balanço" value={income - expense} color={(income - expense ) < 0 ? "red" : "green"}/>
        </C.ResumeArea>
      </C.Container>
  )
};

export default InfoArea;
