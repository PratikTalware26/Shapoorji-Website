import React from 'react'
import "./Home.css"
import homeIntro from "../assets/desktop.mp4"

const Home = () => {
  return (
    <div className='home-cont'>
        <div className='banner-vdo-cont'>
            <video className='responsive-vdo' autoPlay muted loop playsInline>
            <source src={homeIntro} type="video/mp4" />
            </video>
        </div>
        <h1 className='home-head'>LIVE YOUR DREAM</h1>
    </div>
  )
}

export default Home