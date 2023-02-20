import React from 'react'

import Navbar from './component/navbar/Navbar'
import Hero from './component/hero/Hero'
import Project from './component/project/Project'
import Work from './component/work/Work'
import Detail from './component/detail/Detail'
import Footer from './component/footer/Footer'
import Form from './component/form/Form'
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'
import Homepage from './component/Homepage'
import Projects1 from './component/projects/Projects1'
import ScrollToTop from './container/ScrollToTop'

const App = () => {
    return (
        <>
           
           <ScrollToTop />

            <Routes>
                <Route path='/' element={<Homepage />} />
            </Routes>

            <Routes>
                <Route path='/Project1' element={<Projects1 />} />
            </Routes>

           

          
           

           


            <Footer />




        </>

    )
}

export default App
