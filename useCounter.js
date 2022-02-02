import { useState } from "react"


export const useCounter = (initalState = 10) => {
    const [counter, setCounter] = useState(initalState)
    
    const increment = () =>{
        setCounter(counter + 1);
    }

    const decrement = () =>{
        setCounter(counter - 1);
    }


    // const increment = (factor = 1) =>{
    //     setstate(state + factor);
    // }

    // const decrement = (factor = 1) =>{
    //     setstate(state - factor);
    // }

    const reset = () => {
        setCounter(initalState)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}


