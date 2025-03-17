import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const Nav = () => {
useGSAP(()=>{
  let tl = gsap.timeline()
  tl.from('nav h1',{
    opacity:0,
    delay:2,
    y:20
  })
  tl.from('nav li',{
    opacity:0,
    stagger:0.2,
    y:20
  })
})
  return (
    <>
      <nav className='nav overflow-hidden text-white py-5 flex justify-between items-center fixed top-0 w-full max-w-[1600px] pr-10 z-[50]'>
        
        <h1 className='text-3xl font-[Raleway] font-bold'>WebLab</h1>
        
        <div className='flex gap-20 font-[Poppins]'>

        <ul className='gap-5 hidden sm:flex items-center font-semibold'>
          <li><a href="#" className='hover:text-[#0DA34E] transition-all duration-300'>Cases</a></li>
          <li><a href="#" className='hover:text-[#0DA34E] transition-all duration-300'>OutComes</a></li>
          <li><a href="#" className='hover:text-[#0DA34E] transition-all duration-300'>News</a></li>
        </ul>

        <button id='talk' className='cursor-pointer relative transition-all duration-300 border-2 rounded-full py-3 w-32 flex justify-center items-center overflow-hidden p-3'>
           <a href='#' className=' z-20 transition-all duration-300'>Lets Talk</a> 
        </button>

        </div>

      </nav>
    </>
  )
}

export default Nav
