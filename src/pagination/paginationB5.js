import React, {useState} from 'react'
import Header from '../header/header'
import Input from '../components/input'
import Button from '../components/button'
import { NavLink } from 'react-router-dom'
import Footer from '../components/footer'
import PaginationPathB from './paginationPathB'
import AddDevice from '../pagination/add-device'
import {ReactComponent as Bin} from '../images/bin.svg'
import { nanoid } from 'nanoid'


const PaginationB5 = () => {


    const [ data, setData ] = useState([])

    const [ appliance, setAppliance ] = useState('')
    const [ watt, setWatt ] = useState('')
    const [ quantity, setQuantity ] = useState('')
    const [ hours, setHours ] = useState('')
    const [ remove, setRemove ] = useState(<Bin/>)

    let idTrack = nanoid()

    
    const check = (e, index) => {
        const dataObject = {
            appliance: appliance,
            hours: hours,
            quantity: quantity,
            wat: watt,
            remove: remove,
            id: idTrack ,
            // removeOnClick: handleDelete
        }

        setData(data.concat(dataObject))
        setAppliance("")
        setWatt("")
        setQuantity("")
        setHours("")
    }
    // console.log('data is', data)

    const handleDelete = (id) => {
        var list = data.filter( item => item.id !== id)
        console.log(id)
        setData( list )
    }


    const handleAppliancesChange = (e) => {
        setAppliance(e.target.value)
    }

    const handleWattChange = (e) => {
        setWatt(e.target.value)
    }

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
    }

    const handleHoursChange = (e) => {
        setHours(e.target.value)
    }

    const removeAll = () => {
        setData([])
    }

    return(
        <div className="primary">
            <div className="primary-inner">
                <Header/>
                <div className="pagination">
                    <PaginationPathB/>
                </div>

                <p className="appliance-header">Add your Residential Appliances here</p>


                <div className="paginationA1-details add-device-display residential-appliances">
                    <div>

                        <form className=" residential-appliances" >
                            <div>
                                <label>Appliances</label>
                                <Input  type="text" 
                                    value={appliance}
                                    onchange={handleAppliancesChange}
                                    name={appliance}
                                    placeholder="Electric Cooker"
                                />
                            </div>
                            <div className="power-quantity">
                                <div>
                                    <label>Power rating (Watts)</label>
                                    <Input  type="number" 
                                        value={watt}
                                        onchange={handleWattChange}
                                        name={watt}
                                    />
                                </div>
                                <div>
                                    <label>Quantity</label>
                                    <Input type="number" 
                                        value={quantity}
                                        onchange={handleQuantityChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Hours on per day</label>
                                <Input type="number" 
                                    value={hours}
                                    onchange={handleHoursChange}
                                />
                            </div>
                            <div className="add-device" onClick={check}>+ Add more appliance</div>
                            <div className="add-device-mobile">
                                <p className="remove" onClick={removeAll}>{data.length > 0 ? 'Remove all' : ''}</p>
                                { data.map( ( data, index) => 
                                    <AddDevice 
                                        appliance={data.appliance}
                                        hours={data.hours}
                                        quantity={data.quantity}
                                        watt={data.watt}
                                        remove={remove}
                                        removeOnClick={handleDelete}
                                        id={data.id}
                                        key={index}
                                    />
                                )}
                            </div>
                            <div>
                                <NavLink to="/paginationB6"><Button text="Calculate"/></NavLink>
                            </div>
                        </form>
                    </div>
                    <div className="add-devices">
                        <p className="remove" onClick={removeAll}>{data.length > 0 ? 'Remove all' : console.log('it isnt')}</p>
                        { data.map( ( data, index ) => 
                            <AddDevice 
                                appliance={data.appliance}
                                hours={data.hours}
                                quantity={data.quantity}
                                watt={data.watt}
                                remove={remove}
                                removeOnClick={handleDelete}
                                id={data.id}
                                key={index}
                            />
                        )}
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default PaginationB5