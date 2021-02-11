import React from 'react'
import Header from '../header/header'
import Footer from '../components/footer'
import PaginationPathB from './paginationPathB'
import Input from '../components/input'
import Button from '../components/button'
import { NavLink } from 'react-router-dom'



const Pagination3 = () => {

    return (
        <div className="primary">
            <div className="primary-inner">
                <Header/>
                <div className="pagination">
                    <PaginationPathB/>
                </div>
                <div className="paginationA1-details">
                    <p>What date did you start using it?</p>
                    <div className="data-width">
                        <div >
                            <Input placeholder="NGN" type="date"/>
                        </div>
                        <div>
                            <NavLink to="/paginationB5"><Button text="Next"/></NavLink>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
            
    )
}

export default Pagination3