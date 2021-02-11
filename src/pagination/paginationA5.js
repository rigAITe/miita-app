import React from 'react'
import Header from '../header/header'
import Bad from '../images/bad.svg'
import Happy from '../images/happy.svg'
import Mixed from '../images/mixed.svg'
import { NavLink } from 'react-router-dom'
import Button from '../components/button'
import Input from '../components/input'
import Footer from '../components/footer'
import PaginationPathA from './paginationPathA'



const PaginationA5 = () => {

    

    return (
        <div className="primary">
            <div className="primary-inner">
                <Header/>
                <div className="pagination">
                    <PaginationPathA/>
                </div>
                <div>
                    <div className="reactions">
                        <h2>Rate your experience</h2>
                        <div className="reactions-inner">
                            <div>
                                <img src={Bad} alt="Bad img"/>
                            </div>
                            <div>
                                <img src={Mixed} alt="Mixed img"/>
                            </div>
                            <div>
                                <img src={Happy} alt="Happy img"/>
                            </div>
                        </div>
                    </div>
                    <div className="data-width">
                        <textarea placeholder="Tell us more"/>
                        <div>
                            <label>Email Address</label>
                            <Input  type="email" />
                        </div>
                        <div>
                            <NavLink to="/"><Button text="Submit"/></NavLink>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default PaginationA5