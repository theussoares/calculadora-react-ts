import styled from "styled-components"

export const StyledCalculator = styled.div `
    display: flex;
    justify-content: space-between;
    min-height: 280px;
    background-color:  #242424;
    border-radius: 0px 0px 5px 5px;
    max-width: 320px;
    width: 100%;
    padding: 10px;
    margin: 0px;
`

export const StyledButtonNumbers = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 8px;

    gap: 20px;

    button{
        border-radius: 50%;
        border: solid 1px #585858;
        background-color:  #585858;
        color: #ffffff;
        width: 60px;
        height: 60px;

        font-size: 1em;
            
        &:hover{
            cursor: pointer;
        }
    }

    .button0{
        width: 140px;
        border-radius: 50px;
    }

    .white {
        background-color: #ffffff;
        color:  #242424;
    }

   
`

export const StyledButtonFunctions = styled.div`
    display: flex;
    flex-direction: column;
    color: #ffffff;
    padding: 8px;
    justify-content: space-between;
    gap: 2px;

    button{
        border-radius: 50%;
        border: solid 1px #ff8800;
        background-color: #ff8800;
        filter: brightness(1,8);
        color: #242424;
        width: 60px;
        height: 60px;
        font-size: 1em;

        &:hover{
            cursor: pointer;
        }
    }

`