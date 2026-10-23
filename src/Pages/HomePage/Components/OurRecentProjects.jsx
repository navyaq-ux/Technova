import product1 from '../../../assets/product1.png'
import product2 from '../../../assets/product2.png'
import product3 from '../../../assets/product3.jpg'


const OurRecentProjects = () => {
  return (
    <>
    <div className='bg-blue-200 p-15'>

      <div><h3 className='text-center font-bold text-2xl'>Our Recent Projects</h3>
      
      <p className='text-center m-3'>
        Here are some of the websites and applications we have worked on. </p></div>
   

    <div>
 <div className='flex items-center justify-center'>
  <div className='m-3'>
    <img  className='h-50 w-70' src={product1} alt="" />
    <h2 className='font-bold'>Design websites</h2>
  </div>
  <div className=' m-3'>
    <img  className='h-50 ' src={product2} alt="" />
    <h2 className='font-bold'>Design websites</h2>
  </div>
  <div className=' m-3'>
    <img  className='h-50 ' src={product3} alt="" />
    <h2 className='font-bold'>Design websites</h2>
  </div>
 </div>
</div>


    </div>
    
    
    </>
  )
}

export default OurRecentProjects