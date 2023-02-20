import React from 'react'
import Form from './form/Form'
import Detail from './detail/Detail'
import Hero from './hero/Hero'
import Project from './project/Project'
import Work from './work/Work'
import Navbar from './navbar/Navbar'

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Project/>
    <Work/>
    <Detail/>
    <Form/>
      
    </>
  )
}

export default Homepage
