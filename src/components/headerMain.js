import React from 'react'
import Image from '../images/headerMain Image.svg'

const HeaderMain = () => {

    return (
        <div className="headerMain">
            <div>
                <h1>Spend on Electricity the Smart way</h1>
                <p>MIITA gives you the power to control your spending and save on electricity consumption</p>
                <div>Get started - It’s free</div>
            </div>
            <div>
                <img src={Image} alt="A Pic"/>
            </div>
        </div>
    )
}

export default HeaderMain