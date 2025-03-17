const Landing = ({ heading, parg }) => {
    
    const wrapLettersInSpan = (text) => {
      return text.split('').map((letter, index) => (
        <span key={index} className="inline">{letter}</span> 
      ));
    };
  
    return (
      <div className='w-full pt-[25vw] md:pt-0 md:h-screen text-white flex flex-col gap-5 justify-center items-center sm:items-start md:items-center'>
          <h1 ref={heading} className='capitalize w-full sm:w-[76%] md:w-[70%] text-[clamp(50px,6.5vw,100px)] font-extrabold font-[Raleway] leading-none tracking-tighter break-all overflow-hidden'>
            {wrapLettersInSpan('ux-first design agency for b2b + ai companies')}
          </h1>
          <p className='.landing-text-parag font-[Poppins] sm:text-lg md:text-[1.3vw] overflow-hidden'>
            <span ref={parg} className="inline-block">We launch <span className='text-[#0DA34E]'>MVPs</span> redefine existing products & continuously dive into <span className='text-[#0DA34E]'>customer development</span></span>
          </p>
      </div>
    );
  };
  
  export default Landing;
  