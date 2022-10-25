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