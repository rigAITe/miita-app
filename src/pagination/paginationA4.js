import React from 'react'
import Header from '../header/header'
import { NavLink } from 'react-router-dom'
import Button from '../components/button'
import Footer from '../components/footer'
import PaginationPathA from './paginationPathA'



const PaginationA4 = () => {

    

    return (
        <div className="primary">
            <div className="primary-inner">
                <Header/>
                <div className="pagination">
                    <PaginationPathA/>
                </div>
                <div>

                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default PaginationA4