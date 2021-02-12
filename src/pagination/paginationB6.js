import React,{ useState } from 'react'
import Header from '../header/header'
import {ReactComponent as Up } from '../images/up-arrow.svg'
import {ReactComponent as Down } from '../images/down-arrow.svg'
import { NavLink } from 'react-router-dom'
import Button from '../components/button'
import Footer from '../components/footer'
import PaginationPathB from './paginationPathB'



const PaginationB6 = () => {

    const [ click, setClick ] = useState({
        days: false,
        date: false
    })

    const handleDaysClick = () => {
        // console.log(click.days)
        const daysClick = {
            ...click,
            days: !click.days
        }
        setClick(daysClick)
    }

    const handleDateClick = () => {
        // console.log(click.date)
        const dateClick = {
            ...click,
            date: !click.date,
        } 
        setClick(dateClick)
    }

    return (
        <div className="primary">
            <div className="primary-inner">
                <Header/>
                <div className="pagination">
                    <PaginationPathB/>
                </div>
                <div className="calc">
                    <div>
                        <div className="calc-inner">
                            <p>Remaining days</p>
                            <div className="calc-data">37 days to go</div>
                            <div className="unit">
                                <div>Unit</div>
                                <div className="arrow" onClick={handleDaysClick}>
                                    {click.days ? (
                                        <Up/>
                                    ) : (
                                        <Down/>
                                    )}
                                </div>
                                {/* <div className="arrow"><Down/></div> */}
                            </div>
                        </div>
                        <div>
                            <NavLink to="/paginationB7"><Button text="Give Feedback"/></NavLink>
                        </div>
                    </div>
                    <div>
                        <div className="calc-inner">
                            <p>Remaining days</p>
                            <div className="calc-data">25th October 2021</div>
                            <div className="unit">
                                <div>End data</div>
                                <div className="arrow" onClick={handleDateClick}>
                                    {click.date ? (
                                        <Up/>
                                    ) : (
                                        <Down/>
                                    )}
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

export default PaginationB6
