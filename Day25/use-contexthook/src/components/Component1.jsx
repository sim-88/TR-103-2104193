import React from 'react'
import { useContext } from 'react'
import {countContext} from "../context/context"

const Component1 = () => {
    const value = useContext(countContext)
    return (
        <div>
            {value.count}
        </div>
    )
}

export default Component1
