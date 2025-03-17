import { useEffect, useRef } from 'react'
import './App.css'
import Landing from './Landing/Landing'
import Nav from './Nav/Nav'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Video from './Video/Video'
import About from './About/About'
import Parallax from './Parallax/Parallax'

const App = () => {
  const animDiv = useRef()
  const mainDiv = useRef()
  const heading = useRef()
  const parg = useRef()

  useGSAP(()=>{
    let tl = gsap.timeline()
    tl.from(animDiv.current,{
      y:'20%',
      scaleX:0.5,
      scaleY:0,
      ease:'expo.inOut',
      duration:1.5,
      borderRadius:100,
    })
    .to(animDiv.current,{
      display:'none',
    })
    .from(mainDiv.current,{
      display:'none'
    })
    .from(heading.current.querySelectorAll('span'),{
      opacity:0,
      stagger:0.01,
      y:50,
    })
    .from(parg.current,{
      opacity:0,
      y:40,
    })
  })

  return (
    <>
    <div ref={animDiv} className='fixed z-[100] top-0 left-0 w-full h-screen bg-black'></div>
    <div ref={mainDiv} className='w-full min-h-screen bg-black px-5'>
      <Nav/>
      <Landing heading={heading} parg={parg}/>
      <About/>
      <Parallax/>
    </div>
    </>
  )
}

export default App