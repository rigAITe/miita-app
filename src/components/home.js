import React from 'react'
import Header from '../header/header'
import HeaderMain from './headerMain'
import Footer from './footer'

const Home = () => {

    return (
        <div className="home">
            <div className="home-inner">
                <Header/>
                <HeaderMain/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home