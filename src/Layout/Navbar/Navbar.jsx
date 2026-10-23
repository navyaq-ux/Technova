import React from 'react'

const Navbar = () => {
  return (
   <>
   <div className='flex justify-around items-center m-2'>
     <div>
        <span></span>
        <h2 className='font-bold text-xl'>TechNova</h2>
     </div>
     <div>
        <ul className='flex justify-around gap-5'><li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
        
        
        
        </ul>
     </div>
     <div className='bg-blue-500 rounded-2xl text-amber-50 '>
        <button className='p-2'>Get a Quote</button>
     </div>



   </div>
   
   
   </>
  )
}

export default Navbar