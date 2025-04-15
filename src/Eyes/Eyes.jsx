import { useEffect, useState } from 'react'

const Eyes = () => {
const [ang , setAng] = useState()

    useEffect(()=>{
        window.addEventListener("mousemove", (details)=>{
            let mouseX = details.x
            let mouseY = details.y
            
            let xDiff = mouseX - window.innerWidth/2
            let yDiff = mouseY - window.innerHeight/2

            let angle = Math.atan2(yDiff,xDiff) * (180/Math.PI)

            setAng(angle)
        })
    })

return (
    <div className='w-full flex justify-center items-center py-[100px]'>
        
        <div className="flex gap-10">
        
            <div className='w-[35vw] h-[35vw] sm:w-[250px] sm:h-[250px] rounded-full bg-zinc-300 flex justify-center items-center'>
                <div className='w-[80%] relative h-[80%] rounded-full bg-black'>
                    <div style={{transform:`translate(-50%,-50%) rotate(${ang}deg)`}} className="line w-full h-[20%] flex justify-end absolute left-1/2 top-1/2">
                        <div className='w-4 sm:w-8 h-4 sm:h-8 rounded-full bg-zinc-300'></div>
                    </div>
                </div>
            </div>
            <div className='w-[35vw] h-[35vw] sm:w-[250px] sm:h-[250px] rounded-full bg-zinc-300 flex justify-center items-center'>
                <div className='w-[80%] relative h-[80%] rounded-full bg-black'>
                    <div style={{transform:`translate(-50%,-50%) rotate(${ang}deg)`}} className="line w-full h-[20%] flex justify-end absolute left-1/2 top-1/2">
                        <div className='w-4 sm:w-8 h-4 sm:h-8 rounded-full bg-zinc-300'></div>
                    </div>
                </div>
            </div>
        
        </div>

    </div>
  )
}

export default Eyes