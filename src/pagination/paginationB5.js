import React from 'react'
import Header from '../header/header'
import Footer from '../components/footer'
import PaginationPathB from './paginationPathB'
import Input from '../components/input'
import Button from '../components/button'
import { NavLink } from 'react-router-dom'


const PaginationB5 = () => {

    return (
        <div className="primary">
            <div className="primary-inner">
                <Header/>
                <div className="pagination">
                    <PaginationPathB/>
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
                        <div>
                            <NavLink to="/paginationB6"><Button text="Calculate"/></NavLink>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
            
    )
}

export default PaginationB5