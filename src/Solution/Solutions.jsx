import React from 'react'
import SolutionsRight from './SolutionsRight'

const Solutions = () => {
  return (
    <div className='text-white h-auto'>
        
        <h1 className='text-[clamp(30px,5vw,80px)] font-bold leading-none tracking-tighter font-[Raleway] text-center mb-10 lg:w-[40%] w-full m-auto'>Digital Product and Solutions</h1>
        
        <div className='flex justify-between'>
            <button className='font-[Poppins] bg-[#0DA34E] w-52 py-3 h-fit rounded-[30px] sticky top-10 hidden md:block cursor-pointer'>Become a Client</button>

            <SolutionsRight/>
        </div>

        <button className='bg-[#0DA34E] w-52 py-3 h-fit rounded-[30px] sticky top-10 md:hidden cursor-pointer font-[Poppins]'>Become a Client</button>

    </div>
  )
}

export default Solutions