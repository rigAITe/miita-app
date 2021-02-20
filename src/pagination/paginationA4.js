import React,{ useState } from 'react'
import Header from '../header/header'
import {ReactComponent as Up } from '../images/up-arrow.svg'
import {ReactComponent as Down } from '../images/down-arrow.svg'
import { NavLink } from 'react-router-dom'
import Button from '../components/button'
import Footer from '../components/footer'
import PaginationPathA from './paginationPathA'



const PaginationA4 = () => {

    const [ click, setClick ] = useState({
        month: false,
        unit: false,
    })

    const handleMonthClick = () => {
        const daysClick = {
            ...click,
            month: !click.month,
        }
        setClick(daysClick)
    }

    const handleUnitClick = () => {
        const daysClick = {
            ...click,
            unit: !click.unit
        }
        setClick(daysClick)
    }

    return (
        <div className="primary">
            <div className="primary-inner">
                <Header/>
                <div className="pagination">
                    <PaginationPathA/>
                </div>
                <div className="calc">
                    <div>
                        <div className="calc-inner">
                            <p>
                                {click.unit ? (
                                    'W'
                                ) : (
                                    'Unit'
                                )}

                                   /  

                                {click.month ? (
                                    'Yearly'
                                ) : (
                                    'Monthly'
                                )} 
                            </p>
                            <div className="calc-data">37 days to go</div>
                            <div className="unit">
                                <div className="unit-inner" onClick={handleMonthClick}>
                                    <div>
                                        {click.month ? (
                                            'Yearly'
                                        ) : (
                                            'Monthly'
                                        )}
                                    </div>
                                    <div className="arrow" onClick={handleMonthClick}>
                                        {click.month ? (
                                            <Up/>
                                        ) : (
                                            <Down/>
                                        )}
                                    </div>
                                </div>
                                <div className="unit-inner">
                                    <div>{click.unit ? (
                                            'W'
                                        ) : (
                                            'Unit'
                                        )}
                                    </div>
                                    <div className="arrow" onClick={handleUnitClick}>
                                        {click.unit ? (
                                            <Up/>
                                        ) : (
                                            <Down/>
                                        )}
                                    </div>
                                </div>
                                
                                {/* <div className="arrow"><Down/></div> */}
                            </div>
                        </div>
                        <div>
                            <NavLink to="/paginationA5"><Button text="Give Feedback"/></NavLink>
                        </div>
                    </div>
                    <div>
                        <div className="calc-inner">
                            <p>Remaining days</p>
                            <div className="calc-data">25th October 2021</div>
                            <div className="unit">
                                <div className="unit-inner">
                                    <div>Monthly</div>
                                    <div className="arrow" >
                                        <Down/>
                                    </div>
                                </div>
                                <div className="unit-inner">
                                <div>NGN</div>
                                    <div className="arrow" >
                                        <Down/>
                                    </div>
                                </div>
                               
                                {/* <div className="arrow"><Down/></div> */}
                            </div>
                        </div>
                        <div className="dormant">
                            <Button text="Top-up unit" />
                            <p>*coming soon*</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default PaginationA4
