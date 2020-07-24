import React, { useState } from 'react'

function HookCounterPrevious() {
    const initialState = 0;
    const [count, setCount] = useState(initialState);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            // setCount(count + 1)
            setCount(prevCount => prevCount + 1)

        }
    }

    return (
        <>
            Count: {count}
            <button onClick={() => setCount(initialState)} >Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)} >Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)} >Decrement</button>
            <button onClick={incrementFive} >Increment five</button>
        </>
    )
}

export default HookCounterPrevious
