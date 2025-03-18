import React from 'react'
import FooterLinks from './FooterLinks'

const Footer = () => {

let array1 = ["ui design", "ux design", "mobile apps", "privacy policy"]
let array2 = ["our careers", "our story", "contact us", "terms of service"]
let array3 = ["design systems", "app development", "customer support", "data security"]
let array4 = ["github", "facebook", "linkedin", "whatsapp"]

  return (
    <div className='w-full h-auto text-white py-10'>

        <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-20 items-start justify-stat'>
            <div className='flex-grow'>
                <h1 className='text-[clamp(40px,5vw,60px)] leading-none font-[Raleway] font-bold'>Have a Project<br/> in Mind ? </h1>
                <h1 className='text-[clamp(40px,5vw,60px)] leading-none font-[Raleway] font-bold'>Contact Us!</h1>
            </div>
            <div className='font-[Poppins] flex flex-col gap-5 md:gap-10 flex-grow'>
                <div>
                    <p className='opacity-40 mb-3'>Lets Connect</p>
                    <button className='border border-white px-3 py-1 rounded-full'>Check Our Latest Deck</button>
                </div>
                <div>
                    <p className='opacity-40 mb-3'>Our Location</p>
                    <h2 className='text-[40px] leading-none'>630 Mason St.</h2>
                    <h2 className='text-[40px] leading-none'>XYZ, CA 94108</h2>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-10 sm:flex-row justify-between flex-wrap my-10 font-[Poppins] border-t-2 border-white py-5'>
            <FooterLinks array={array1} heading='Shaping Experience' />
            <FooterLinks array={array2} heading='Where We Shine' />
            <FooterLinks array={array3} heading='Behind The Screen' />
            <FooterLinks array={array4} heading='Our Social' />
        </div>

        <div className='flex justify-between flex-col sm:flex-row gap-1 font-[Poppins] text-sm'>
            <p>WEB LAB AGENCY</p>
            <p>All rightes reserved @2025</p>
        </div>

    </div>
  )
}

export default Footer