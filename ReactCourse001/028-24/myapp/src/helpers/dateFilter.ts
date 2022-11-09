import { Item } from "../types/Item";

export const getCurrentMonth = () => {
    let now = new Date();

    return `${now.getFullYear()} - ${now.getMonth() + 1}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];

    let [year,month] = date.split("-");

    for(let i in list) {
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    }

    return newList;
}

export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth() + 1;

    return `${ZeroToDate(day)}/${ZeroToDate(month)}/${ZeroToDate(year)}` 
}

export const ZeroToDate = (n: number) => n < 10 ? `0${n}` : `${n}`

export const formatCurrentMonth = (currenthMonth: string): string => {
    let [year,month] = currenthMonth.split("-");
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return `${months[parseInt(month) -1]} de ${year}`;
}