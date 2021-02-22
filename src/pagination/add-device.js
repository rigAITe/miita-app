import React, {useState} from 'react'

const AddDevice = ({data: { appliance, hours, quantity, watt, remove, removeOnClick, id}}) => {

    const [ value, setValue ]  = useState(quantity)

     const valueChange = (e) => {
         setValue(e.target.value)
     }
     
    return(
        <div className="add-more-device" key={id}>
            <div>
                <p>{appliance}</p>
                <p><b>{hours}hrs/day</b></p>
            </div>
            <div>
                <p>{watt} <b>W</b></p>
            </div>
            <div className="quantity">
                <input onChange={valueChange}
                    value={value}
                    type='number'/>
            </div>
            <div onClick={removeOnClick} className='bin'>{remove}</div>
        </div>
    )
}

export default AddDevice