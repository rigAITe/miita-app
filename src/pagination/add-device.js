import React from 'react'

const AddDevice = ({data: { appliance, hours, quantity, watt, remove, removeOnClick}}) => {

    return(
        <div className="add-more-device">
            <div>
                <p>{appliance}</p>
                <p><b>{hours}hrs/day</b></p>
            </div>
            <div>
                <p>{watt}<b>W</b></p>
            </div>
            <div className="quantity">
                {/* <input  type="number" value={quantity}/> */}
                <p>{quantity}</p>
            </div>
            <div onClick={removeOnClick} className='bin'>{remove}</div>
        </div>
    )
}

export default AddDevice