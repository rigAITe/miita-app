import React from 'react'
import Header from '../header/header'
import Footer from './footer'
import Arrow from '../images/right arrow.svg'
import { NavLink } from 'react-router-dom'




const Determine = () => {

    return(
        <div className="primary full-height">
            <div className="primary-inner">
                <Header/>
                <div className="determine">
                    <p>Let's determine</p>
                    <div>
                        <div className="determine-inner">
                            <NavLink to="/paginationA1"><div>How much i should spend on electricity?</div></NavLink>
                            <NavLink to="/paginationA1"><div><img src={Arrow} alt="arrow"/></div></NavLink>
                        </div>
                        <div className="determine-inner">
                            <NavLink to="/paginationB1"><div>How long my purchased unit will last?</div></NavLink>
                            <NavLink to="/paginationB1"><div><img src={Arrow} alt="arrow"/></div></NavLink>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Determine