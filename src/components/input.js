import React from 'react'

const Input = ({placeholder, type, value, onchange}) => {

    return(
        <div>
            <input placeholder={placeholder}  type={type} value={value} onChange={onchange} required/>
        </div>
    )
}

export default Input