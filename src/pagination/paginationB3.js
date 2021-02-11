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
                    <p>How much did you last pay for electricity?</p>
                    <div className="data-width">
                        <div >
                            <Input placeholder="NGN"/>
                        </div>
                        <div>
                            <NavLink to="/paginationB4"><Button text="Next"/></NavLink>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
            
    )
}

export default Pagination3