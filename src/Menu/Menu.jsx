import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Menu = ({menu,setShowMenu}) => {
    useGSAP(()=>{
        gsap.set('.menu',{
            y:'20%',
            scaleX:0.5,
            scaleY:0,
            borderRadius:100,
        })
    })

    let close = () => {
        setShowMenu(false)
    }
   
  return (
    <div ref={menu} className='menu w-full h-screen fixed top-0 left-0 z-[1000] bg-black'>

        <button onClick={close} class="w-10 h-10 flex items-center justify-center bg-transparent border-2 border-white rounded-full absolute right-10 top-10 opacity-0 cursor-pointer translate-y-[20px]">
            <div class="w-6 h-0.5 bg-white rotate-45"></div>
            <div class="w-6 h-0.5 bg-white -rotate-45 absolute"></div>
        </button>

        <div className="w-fit h-screen flex justify-center items-center flex-col text-[clamp(70px,8vw,100px)] text-center m-auto">

            <h1 className="text-white w-full cursor-pointer opacity-0 translate-y-[20px] hover:text-[#0DA34E] transition-text duration-300"> 
                HOME 
                <span className="block w-[0%] h-1 bg-white"></span>
            </h1>
            <h1 className="text-white w-full cursor-pointer opacity-0 translate-y-[20px] hover:text-[#0DA34E] transition-text duration-300">
                CONTACT
                <span className="w-[0%] h-1 bg-white block"></span>
            </h1>
            <h1 className="text-white w-full cursor-pointer opacity-0 translate-y-[20px] hover:text-[#0DA34E] transition-text duration-300">
                GALLERY
                <span className="w-[0%] h-1 bg-white block"></span>
            </h1>
            <h1 className="text-white w-full cursor-pointer opacity-0 translate-y-[20px] hover:text-[#0DA34E] transition-text duration-300">
                ABOUT US
                <span className="w-[0%] h-1 bg-white block"></span>
            </h1>

        </div>
    </div>
  )
}

export default Menu