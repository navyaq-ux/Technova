
import { Plane, ShieldUser, UserGroup } from "lucide-react"
import photo from "../../../assets/img1.avif"
const Herosection = () => {
  return (
   <>
    <div className="flex gap-10 ">
     <div>
        <div className="ml-40 mt-10 text-gray-400">YOUR DIGITAL PARTNER</div>
        <div className="text-6xl ml-40 mt-6"><h1>We create<br/>  <span className="text-blue-500 font-bold">Websites & Apps</span> <br/> That Grow your Business</h1></div>
         <div className="ml-40 mt-5 font-semibold text-xl text-gray-400" ><p>We help business with modern websites, mobile apps,<br/> software solutions and digital marketing to build a <br/>stronger online presence</p></div>
           

       <div className="ml-40 mt-10">
        <button className="bg-blue-500 text-white p-2.5 m-2 rounded-2xl px-4">Get Started</button>
        <button className="border-blue-500 border-2 text-blue-500 rounded-2xl p-2 px-4">Our Services</button>
       </div>

     </div>

        <div>
            <img className="h-150" src={photo} alt="" />
        </div>
    </div>
<div className="flex">
    
<div className="flex ml-40 -mt-20 items-center gap-7 ">
    <span className="text-blue-400"><Plane/></span>
    <div><h2 className="font-bold">Fast Delivery</h2>
    <h3>On-time Project Delivery</h3></div>
</div>
<div className="flex ml-40 -mt-20 items-center gap-7 ">
    <span className="text-blue-400"><ShieldUser/></span>
    <div><h2 className="font-bold">Quality work</h2>
    <h3>Clean & Modern Solutions</h3></div>
</div>
<div className="flex ml-40 -mt-20 items-center gap-7 ">
    <span className="text-blue-400"><UserGroup/></span>
    <div><h2 className="font-bold">Ongoing Support</h2>
    <h3>WE're Always Here</h3></div>
</div>
</div>

   </>
  )
}

export default Herosection