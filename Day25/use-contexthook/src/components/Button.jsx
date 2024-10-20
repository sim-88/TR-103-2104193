import React, { useContext } from 'react'
import Component1 from './Component1'
import { countContext } from '../context/context'

const Button = () => {
    const value = useContext(countContext)
    return (

        <div>
            <button onClick={() => {value.setCount((count) => count + 1)}
            }>I am Button</button>
            <Component1 />
        </div>
    )
}

export default Button
