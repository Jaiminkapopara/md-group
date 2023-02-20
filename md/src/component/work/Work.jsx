import React from 'react'
import Card from '../../container/card/Card'
import bg from '../../assets/5.jpg'
import bg2 from '../../assets/6.jpg'
import bg3 from '../../assets/10.jpg'
import bg4 from '../../assets/11.jpg'
import bg5 from '../../assets/12.jpg'


import './work.css'

const Work = () => {
  return (
    <div className='work'>
        <h1>Work In Progress</h1>
        <div className="cards">
        <Card img={bg} title='Home in Merrick Way' infom='
Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood'/>
      <Card img={bg2} title='Villa in Coral Gables' infom='
Just steps away from QM2 express bus to Manhattan and local buses; only minutes from the L …'/>
      <Card img={bg3} title='Villa on Grand Avenue' infom='
Mineral Reserves: 2008 core drilling and testing (on just 60 of the 1,100 acres) proved 30 …'/>
      <Card img={bg4} title='Villa in Coral Gables' infom='
Just steps away from QM2 express bus to Manhattan and local buses; only minutes from the L …'/>
      <Card img={bg5} title='Villa on Grand Avenue' infom='
Mineral Reserves: 2008 core drilling and testing (on just 60 of the 1,100 acres) proved 30 …'/>


      </div>
    </div>
  )
}

export default Work
