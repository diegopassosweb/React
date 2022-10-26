import { Item } from "../types/Item";

export const getCurrenthMonth = () => {
    let now = new Date();
    return `${now.getFullYear()} - ${now.getMonth() + 1}`;
}

export const filteredlistbymonth = (list: Item[], date: string): Item[] => {
    let newlist: Item[] = [];
    let [year,month] = date.split("-");

    for(let i in list) {
        if(
        list[i].date.getFullYear() === parseInt(year) &&
        (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newlist.push(list[i]);
        }
    }

    return newlist;
}

export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${ZeroToDate(day)}/${ZeroToDate(month)}/${year}`;
}
 const ZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

 export const formatCurrenthMonth = (currenthMonth: string): string => {
    let [year,month] = currenthMonth.split("-");
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return `${months[parseInt(month) -1]} de ${year}`;
 }