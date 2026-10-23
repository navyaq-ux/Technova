import { Bitcoin, Camera, Mail, MapPinCheck, Phone, SquareFunction } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
   <>
   <div className=' bg-blue-950 text-amber-50 p-8'>
   <div className='flex justify-around p-4 bg-blue-950 text-white'>
     <h3>TechNova</h3>

    <ul className='flex gap-3'>
      <li>
        Home 
      </li>
      <li>
        Services
      </li>
      <li>
        About
      </li>
      <li>
        Projects 
      </li>
    </ul>

    <div className='flex gap-3'>
      <span><SquareFunction/></span>
      <span><Camera/></span>
      <span><Bitcoin/></span> 
    </div>

   </div>
   <div className='flex justify-center gap-30'>
    <a href="#" className='flex'><Mail/> info@yourwebsite.com</a>
    <a href="#" className='flex'> <Phone/>+9876543210</a>
    <a href="# " className='flex'><MapPinCheck/> 123,your Street , Your city</a>
   </div>
   </div>
   </>
  )
}

export default Footer