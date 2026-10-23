import { Goal } from 'lucide-react'
import img2 from '../../../assets/img2.avif'


const AboutUs = () => {
  return (
   <>
   <div className=' bg-gray-200'>
     <div className='flex justify-center gap-10'>
       <div>
  <img  className='rounded-2xl m-5 h-70'  src={img2} alt="" />
 </div>
      <div>
        <h3 className='font-bold text-2xl mt-5'>About us</h3>
      <p className='mt-5'>We are a passionate team of developers, designers and digital marketers<br/> focused on creating powerful digital products for business. Our goal is<br/> to deliver simple , clean and effective solutions that bring real results.</p>
 <div className='flex mt-15 gap-10 '>
       <div className='flex items-center'><span className='text-blue-200'><Goal/></span>
      <div><h3 className='font-bold'>Client Focused</h3>
      <p>Your Goals,our Priority</p></div></div>
        <div className='flex items-center'><span><Goal/></span>
      <div><h3 className='font-bold'>Creative Ideas</h3>
      <p>Fresh ideas for growth</p></div></div>
        <div className='flex items-center'><span><Goal/></span>
      <div><h3 className='font-bold'>Reliable Support</h3>
      <p>Long-term Partnership</p></div></div>
    
 </div> 



     </div>
   </div>
   </div>
  </>
  )
}

export default AboutUs