import React from 'react'
import RainBow from '../hoc/Rainbow'

function About() {
  return (
    <div className='container'>
      <h4 className="center">About 關於</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime praesentium, quaerat soluta porro nesciunt, illo minima necessitatibus vel odio asperiores in! Quis alias nihil officiis reiciendis inventore ratione, molestias beatae!</p>
    </div>
  )
}

export default RainBow(About)
