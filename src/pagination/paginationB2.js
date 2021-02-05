import React from 'react'
import Header from '../header/header'
import Footer from '../components/footer'
import PaginationPathB from './paginationPathB'
import Input from '../components/input'
import Button from '../components/button'


const PaginationB2 = () => {

    return(
        <div className="primary">
            <div className="primary-inner">
                <Header/>
                <div className="pagination">
                    <PaginationPathB/>
                </div>
                <div className="paginationA1-details">
                    <p>Tell us the State and City the Bulding is located</p>
                    <div className="data-width">
                        <div >
                            <Input placeholder="Location"/>
                        </div>
                        <div>
                            <Button text="Next"/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default PaginationB2