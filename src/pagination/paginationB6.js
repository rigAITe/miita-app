import React from 'react'
import Header from '../header/header'
import Footer from '../components/footer'
import PaginationPathB from './paginationPathB'
import Input from '../components/input'

const Pagination6 = () => {

    return (
        <div className="primary">
            <div className="primary-inner">
                <Header/>
                <div className="pagination">
                    <PaginationPathB/>
                </div>

                <Footer/>
            </div>
        </div>
            
    )
}

export default Pagination6