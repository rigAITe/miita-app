import React from 'react'

const Input = ({placeholder, type}) => {

    return(
        <div>
            <input placeholder={placeholder}  type={type} required/>
        </div>
    )
}

export default Input