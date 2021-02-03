import React from 'react'
import Logo from '../assets/Logo.svg'
import Facebook from '../images/facebook.svg'
import LinkdIn from '../images/linkdin.svg'
import Twitter from '../images/twitter.svg'
import Youtube from '../images/youtube.svg'

const Footer = () => {

    const year = () => {
        let year = new Date();
        return year.getFullYear();
    }

    //calculation of appliances should be done here



    return (
        <footer>
            <div className="footer-logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="info-tip">
                <div>Terms of service</div>
                <div>Privacy policy</div>
                <div>Test API</div>
                <div>Documentation</div>
            </div>
            <div className="handles">
                <div>hello@miita.co</div>
                <div className="social">
                    <div>
                        <img src={Twitter} alt=""/>
                    </div>
                    <div>
                        <img src={Youtube} alt=""/>
                    </div>
                    <div>
                        <img src={Facebook} alt=""/>
                    </div>
                    <div>
                        <img src={LinkdIn} alt=""/>
                    </div>
                </div>
                <div>
                    <div> &copy; {year()} MIITA. All Rights Reserved</div>
                </div>
            </div>
            {/* the claculated appliances should be un the span tag below*/}
            <div className="calculator">We already calculated <span>120,457,357</span> appliances for different buildings</div>
        </footer>
    )
}

export default Footer