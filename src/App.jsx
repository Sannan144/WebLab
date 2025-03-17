import { useEffect, useRef } from 'react'
import './App.css'
import Landing from './Landing/Landing'
import Nav from './Nav/Nav'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Video from './Video/Video'

const App = () => {
  const animDiv = useRef()
  const heading = useRef()
  const parg = useRef()

  // useGSAP(()=>{
  //   let tl = gsap.timeline()
  //   tl.from(animDiv.current,{
  //     y:'20%',
  //     scaleX:0.5,
  //     scaleY:0,
  //     ease:'expo.inOut',
  //     duration:1.5,
  //     borderRadius:100,
  //   })
  //   tl.from(heading.current.querySelectorAll('span'),{
  //     opacity:0,
  //     stagger:0.01,
  //     y:50,
  //     delay:-.7,
  //   })
  //   tl.from(parg.current,{
  //     opacity:0,
  //     y:40,
  //   })
  // })
  return (
    <div className='w-full min-h-screen bg-black px-5'>
    <div ref={animDiv} className=''>
      <Nav/>
      <Landing heading={heading} parg={parg}/>
    </div>
      <Video/>
    </div>
  )
}

export default App