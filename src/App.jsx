import { useEffect, useRef, useState } from 'react'
import './App.css'
import Landing from './Landing/Landing'
import Nav from './Nav/Nav'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import About from './About/About'
import Parallax from './Parallax/Parallax'
import Solutions from './Solution/Solutions'
import Faq from './Faq/Faq'
import Footer from './Footer/Footer'
import Menu from './Menu/Menu'
import Eyes from './Eyes/Eyes'

const App = () => {
const [showMenu , setShowMenu] = useState(false)  
  const animDiv = useRef()
  const mainDiv = useRef()
  const menu = useRef()
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
      display:'none',
      delay:-.4,
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

  if(showMenu){
    let tmLn = gsap.timeline()

    tmLn.set(mainDiv.current,{
      display:'none'
    })
    tmLn.set(animDiv.current,{
      display:'block'
    })
    tmLn.to(animDiv.current,{
      y:'20%',
      scaleX:0.5,
      scaleY:0,
      ease:'expo.inOut',
      duration:1.5,
      borderRadius:100,
    })
    tmLn.to(menu.current,{
      y:'0%',
      scaleX:1,
      scaleY:1,
      ease:'expo.inOut',
      duration:1.5,
      borderRadius:0,
    })
    tmLn.to('.menu h1',{
      y:0,
      stagger:0.2,
      opacity:1,
  })
    tmLn.to('.menu span',{
      width:'100%',
      stagger:0.4,
  })
    tmLn.to('.menu button',{
      opacity:1,
      y:0,
      duration:0.1,
      delay:-.4,
  })

  }else{
    let tmLn = gsap.timeline()

    tmLn.to('.menu h1 , .menu button',{
      opacity:0,
      translateY:'20px',
    })
    .to(menu.current,{
      y:'20%',
      scaleX:0.5,
      scaleY:0,
      ease:'expo.inOut',
      duration:1.5,
      borderRadius:0,
    })
    .to(animDiv.current,{
      y:'0%',
      scaleX:1,
      scaleY:1,
      ease:'expo.inOut',
      duration:1.5,
      borderRadius:0,
    })
    .to(animDiv.current,{
      display:'none',
    })
    .to(mainDiv.current,{
      display:'block'
    })
    
  }

  return (
    <>
    <div ref={animDiv} className='fixed z-[100] top-0 left-0 w-full h-screen bg-black'></div>
    <div ref={mainDiv} className='w-full max-w-[1600px] m-auto min-h-screen bg-black px-5'>
      <Nav showMenu={showMenu} setShowMenu={setShowMenu}/>
      <Landing heading={heading} parg={parg}/>
      <About/>
      <Parallax/>
      <Solutions/>
      <Eyes/>
      <Faq/>
      <Footer/>
    </div>
    <Menu menu={menu} setShowMenu={setShowMenu}/>
    </>
  )
}

export default App