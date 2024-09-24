import React from 'react'
import "./marq.css"
import Marquee from 'react-fast-marquee'

function Marq() {
  return (
    <div className='' style={{background:"white"}} >
     <Marquee  className='marq' >  -SPEED-AWARENESS </Marquee>
     {/* <Marquee style={{fontSize:"100px" ,height:"100px", color:"#ffe06f"}} > speedawareness</Marquee> */}
    </div>
  )
}

export default Marq