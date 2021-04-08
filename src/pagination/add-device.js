import React, {useState} from 'react'

const AddDevice = ( props) => {

    const [ value, setValue ]  = useState(props.quantity)

    console.log()

    const valueChange = (e) => {
        setValue(e.target.value)
    }
     
    return(
        <div className="add-more-device">
            <div>
                <p>{props.appliance}</p>
                <p><b>{props.hours}hrs/day</b></p>
            </div>
            <div>
                <p>{props.watt} <b>W</b></p>
            </div>
            <div className="quantity">
                <input onChange={valueChange}
                    value={value}
                    type='number'/>
            </div>
            <div onClick={() => props.removeOnClick(props.id)} className='bin'>{props.remove}</div>
        </div> 
    )
}

export default AddDevice