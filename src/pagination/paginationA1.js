import React from 'react'
import PaginationPathA from './paginationPathA'
import Header from '../header/header'
import Footer from '../components/footer'
import Arrow from '../images/back-button.svg'
import Button from '../components/button'
import { NavLink } from 'react-router-dom'



const PaginationAB1 = () => {

    return(
        <div className="primary ">
            <div className="primary-inner">
                <Header/>
                <div className="paginationA1">
                    <NavLink to="/to-determine"><img className="back-arrow" src={Arrow} alt="arrow img"/></NavLink>
                </div>
                <div className="pagination">
                    <PaginationPathA/>
                </div>
                <div className="paginationA1-details">
                    <p>What type of Building are you calculating for?</p>
                    <div className="paginationA1-button">
                        <NavLink to="/paginationA2"><Button text="Residential" /></NavLink>
                        <NavLink to="/paginationA2"><Button text="Commercial" /></NavLink>
                        <NavLink to="/paginationA2"><Button text="Industry" /></NavLink>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default PaginationAB1

