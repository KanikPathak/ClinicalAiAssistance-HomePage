import React from 'react'
import './navbar.css'
function Navbar() {
  return (
      <>
        <div className='flex items-center absolute  w-screen p-2 justify-end gap-16'>
        <div className="w-screen">
        <img src="./media/untitled.png" className="w-12 ml-2"  alt="" />
        <span className='inline-block'> CLINICAL <span style={{color:'red'}}>
        AI</span>
             <br />
              ASSISTANCE </span>
        </div>
        <div className ="nav-item text-nowrap text-lg">Home</div>
        <div className ="nav-item text-nowrap text-lg">Why We Started</div>
        <div className ="nav-item text-nowrap text-lg">Swasthya Sathi</div>
        <div className ="nav-item text-nowrap text-lg">News</div>
        <div className ="nav-item text-nowrap text-lg">Our Team</div>
        <div className ="nav-item text-nowrap mr-20 text-lg"><img src="./media/user.png" className="w-24" alt="" /></div>
        </div>
    
    
    </>
  )
}

export default Navbar
