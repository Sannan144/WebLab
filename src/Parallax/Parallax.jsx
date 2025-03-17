import img from '../assets/bgImg.webp';  

const Parallax = () => {
  return (
    <div className='w-full h-auto lg:h-screen bg-[#2d3aa6] my-20 relative rounded-[50px] overflow-hidden flex justify-center items-center lg:py-0 py-[40vw] sm:py-[30vw] md:py-[20vw]'>
      <div className='w-full h-full absolute left-0 top-0 bg-black/60'></div>

      <div
        className='w-full h-full absolute left-0 top-0 z-[10]'
        style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment:'fixed',}}
      ></div>
      <div className='text-white w-full px-5 text-start lg:text-center relative z-30'>
        <h1 className='font-[Raleway] text-[clamp(35px,6vw,80px)] font-bold leading-none tracking-tighter'>Golden Standard In Ux + AI</h1>
        <p className='font-[Poppins] text-[clamp(18px,1.3vw,25px)] mt-10 '>look we have been designing AI experiences since <span className='text-[#0DA34E]'>2017</span>, and we are not just dabbling in it;</p>
        <p className='font-[Poppins] text-[clamp(18px,1.3vw,25px)] mb-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facilis! Lorem ipsum dol amet.</p>
        <button className='bg-black w-52 py-3 rounded-[40px] font-[Poppins] cursor-pointer'>Check our Ux + AI</button>
      </div>
    </div>
  );
};

export default Parallax;
