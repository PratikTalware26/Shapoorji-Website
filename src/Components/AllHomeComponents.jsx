import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Enquiry from './Enquiry'

const AllHomeComponents = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Enquiry/>
    </div>
  )
}

export default AllHomeComponents