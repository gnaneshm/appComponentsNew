import { string } from 'prop-types'
import React from 'react'

const propTypes = {
    color:string
}

const Button = ({color}) => {
    return (
        <div>
            <button style={{color:`${color}`}}>Blue</button>
        </div>
    )
}

Button.propTypes = propTypes;
export default Button

