import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: var(--primary);
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px var(--paddingMain);  
    margin-bottom: 75px;
    

    label {
        font-size: var(--fontMedium);
        color: var(--terceary);
    }

    input {
        font-size: var(--fontXLarge);
        height: 80px;
        padding-bottom: 12px;
        color: var(--secondary)
        line-height: var(--fontXLarge);
        font-weight: bold;
        border-bottom: 2px solid var(--secondary);
        border: 0;
        background-color: transparent;
        color: var(--white);
        outline: 0;
        padding-left: 10px;
    }
    
`;