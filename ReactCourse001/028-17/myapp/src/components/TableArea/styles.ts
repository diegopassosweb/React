import styled from "styled-components";


export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    margin-top: 20px;

`;

export const TableHeadColumn = styled.th<{width?: number}>`
    padding: 10px 0;
    text-align: left;
    width: ${props => props.width ? `${props.width}px` : "auto"};
`;