import React from 'react'
import Header from '../header/header'
import Input from '../components/input'
import Button from '../components/button'
import { NavLink } from 'react-router-dom'
import Footer from '../components/footer'
import PaginationPathA from './paginationPathA'


const PaginationA3 = () => {

    return(
        <div className="primary">
            <div className="primary-inner">
                <Header/>
                <div className="pagination">
                    <PaginationPathA/>
                </div>
                <div className="paginationA1-details">
                    <p>Add your Residential Appliances here</p>
                    <div className="data-width">
                        <div>
                            <label>Appliances</label>
                            <Input  type="text"/>
                        </div>
                        <div className="power-quantity">
                            <div>
                                <label>Power rating (Watts)</label>
                                <Input  type="number"/>
                            </div>
                            <div>
                                <label>Quantity</label>
                                <Input type="number"/>
                            </div>
                        </div>
                        <div>
                            <label>Hours on per day</label>
                            <Input type="number"/>
                        </div>
                        <div className="add-device">+ Add more appliance</div>
                        <div>
                            <NavLink to="/paginationA4"><Button text="Calculate"/></NavLink>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default PaginationA3