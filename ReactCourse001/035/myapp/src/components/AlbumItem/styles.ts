import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 160px;
    height: 160px;
    text-align: center;
`;

export const Title = styled.h3`
    font-size: var(--fontSmall);
    color: var(--terceary);
    margin-bottom: 35px;
    margin: 10px;
`;
export const Description = styled.h4`
    font-size: var(--fontSmall);
    color: var(--secondary);
    margin-bottom: 35px;
`;

export const Imagem = styled.img`
    width: 160px;
    height: 160px;
    background-color: #666666;
`;