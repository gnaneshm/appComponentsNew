import { string } from 'prop-types'
import React from 'react'

const propTypes = {
    color:string
}
const Dropdown = ({color}) => {
    return (
        <select style={{color:`${color}`}}>
            <option>value1</option>
            <option>value2</option>
            <option>value3</option>
            <option>value4</option>
        </select>
    )
}

Dropdown.propTypes = propTypes;

export default Dropdown
