import React, { useContext, useState } from "react";
import { FunctionsContext } from "../Context/functions";
import { StyledButtonFunctions, StyledButtonNumbers, StyledCalculator } from "./Calculator";


export function Calculator () {
    
    const numbers: Array<number> = [1,2,3,4,5,6,7,8,9,0]
    const { inputNum, clear, porcentage, saveNum, calculate, changeSignal } = useContext(FunctionsContext)

    return (
        <StyledCalculator>
            <StyledButtonNumbers>
                <button className="white" onClick={clear}>AC</button>
                <button className="white" onClick={changeSignal}>+/-</button>
                <button className="white" onClick={porcentage}>%</button>
                {numbers.map((number, i) => (
                    <button onClick={() => inputNum(number)} className={i == 9 ? "button0" : ""} key={i}>{number}</button>  
                ))}
                <button onClick={() => inputNum(".")}>,</button>
            </StyledButtonNumbers> 
            <StyledButtonFunctions>
                <button className="orange" onClick={() => saveNum("/")}>/</button>
                <button onClick={() => saveNum("x")}>x</button>
                <button onClick={() => saveNum("-")}>-</button>
                <button onClick={() => saveNum("+")}>+</button>
                <button onClick={calculate}>=</button>
            </StyledButtonFunctions>
        </StyledCalculator>
    )
}