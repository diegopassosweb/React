
import styled from "styled-components";
type Props = {
    done: boolean;
}

export const Container = styled.div(({done}: Props)=> (
    `
    display: flex;
    background-color: #20212C;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    align-items: center;

    label {
        color: #ccc;
        text-decoration: ${done ? "line-through" : "initial"};
    }

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }
`
));