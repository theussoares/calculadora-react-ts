import { createContext, ReactNode, useState } from "react";

export interface IFunctionsProviderProps{
    children: ReactNode;
}

interface IFuncitionsContext{
    setNumber: React.Dispatch<React.SetStateAction<number>>
    setOldNumber: React.Dispatch<React.SetStateAction<number>>
    setOperator: React.Dispatch<React.SetStateAction<string>>
    num: number
    oldNum: number
    operator: string
    inputNum(value: number | string): void
    clear(): void
    porcentage(): void
    saveNum(value: string): void
    calculate(): void
    changeSignal(): void
}

export const FunctionsContext = createContext<IFuncitionsContext>({} as IFuncitionsContext)

export function FuncitonsProvider({ children }: IFunctionsProviderProps){

    const [num, setNumber] = useState<any>(0)
    const [oldNum, setOldNumber] = useState<any>(0)
    const [operator, setOperator] = useState<string>("")
  
    const inputNum = (value: any) => {
        if(num == 0){
            setNumber(value)
        }
        setNumber(String(num + value))
    }

    const clear = () => {
        setNumber(0)
    }

    const changeSignal = () => {
        if(num > 0){
            setNumber(-num)
        }
        if(num < 0){
            setNumber(Math.abs(num))
        }
    }

    const porcentage = () => {
        setNumber(num/100)
    }

    const saveNum = (value: string) => {
        setOperator(value)
        setOldNumber(num)
        setNumber(0)
    }

    const calculate = () => {
        if(operator == "/"){
            setNumber(parseFloat(oldNum) / parseFloat(num))
        }
        if(operator == "x"){
            setNumber(parseFloat(oldNum) * parseFloat(num))
        }
        if(operator == "+"){
            setNumber(parseFloat(oldNum) + parseFloat(num))
        }
        if(operator == "-"){
            setNumber(parseFloat(oldNum) - parseFloat(num))
        }
    }

    return(
        <FunctionsContext.Provider value={{ setNumber, changeSignal, calculate, saveNum, num, inputNum, clear, porcentage, setOldNumber, oldNum, operator, setOperator }}>
            {children}
        </FunctionsContext.Provider>
    )
}