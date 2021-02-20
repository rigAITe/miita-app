import React, {useState} from 'react'
import Header from '../header/header'
import Bad from '../images/bad.svg'
import Happy from '../images/happy.svg'
import Mixed from '../images/mixed.svg'
import BadR from '../images/badR.svg'
import HappyR from '../images/happyR.svg'
import MixedR from '../images/mixedR.svg'
import { NavLink } from 'react-router-dom'
import Button from '../components/button'
import Input from '../components/input'
import Footer from '../components/footer'
import PaginationPathA from './paginationPathA'



const PaginationA5 = () => {

    const [ click, setClick ] = useState({
        happy: false,
        mixed: false,
        bad: false
    })

    const badClick = () => {
        const setMood = {
            ...click,
            bad: !click.bad
        }
        setClick(setMood)
    }

    const mixedClick = () => {
        const setMood = {
            ...click,
            mixed: !click.mixed
        }
        setClick(setMood)
    }

    const happyClick = () => {
        const setMood = {
            ...click,
            happy: !click.happy
        }
        setClick(setMood)
    }



    

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
                            <div onClick={badClick}>
                                {
                                    click.bad  ? (<img src={BadR} alt="Bad img"/>) : (<img src={Bad} alt="Bad img"/>)
                                }
                                
                            </div>
                            <div onClick={mixedClick}>
                                {
                                    click.mixed ? (<img src={MixedR} alt="Bad img"/>) : (<img src={Mixed} alt="Bad img"/>)
                                }
                            </div>
                            <div onClick={happyClick}>
                                {
                                    click.happy ? (<img src={HappyR} alt="Bad img"/>) : (<img src={Happy} alt="Bad img"/>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="data-width">
                        {
                            click.bad || click.mixed || click.happy === true 

                            ?

                            <div>
                                <textarea placeholder="Tell us more"/>
                                <div>
                                    <label>Email Address</label>
                                    <Input  type="email" />
                                </div>
                                <div>
                                    <NavLink to="/"><Button text="Submit"/></NavLink>
                                </div>
                            </div>

                            : 

                                console.log('false')
                        }
                        
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default PaginationA5