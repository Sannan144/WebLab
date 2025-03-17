import React from 'react'

const AboutCard = ({heading,text,width}) => {
  return (
    <>
<div
  className={`${width ? 'w-96 sm:w-[500px] md:w-[45vw] max-w-[825px]' : 'w-96 sm:w-[500px] md:w-[30vw] max-w-[550px]'} h-64 duration-500 group overflow-hidden relative rounded-3xl bg-[#1F1F1F] text-neutral-50 p-4 flex flex-col justify-evenly select-none sticky top-10`}
>
  <div
    className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-[#0da34e] right-1 -bottom-24"
  ></div>
  <div
    className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"
  ></div>
  <div
    className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"
  ></div>
  <div
    className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"
  ></div>
  <div className="z-10 flex flex-col justify-evenly w-full h-full">
    <h1 className="text-5xl font-bold font-[Raleway]">{heading}</h1>
    <p className='font-[Poppins]'>
    {text}
    </p>
    
  </div>
</div>

    </>
  )
}

export default AboutCard