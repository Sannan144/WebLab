import img from '../assets/bgImg.webp';  

const Parallax = () => {
  return (
    <div className='w-full h-screen bg-[#2d3aa6] relative'>
      <div className='w-full h-full absolute left-0 top-0 bg-black/40'></div>

      <div
        className='w-full h-full absolute left-0 top-0 z-[1]'
        style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment:'fixed'}}
      ></div>
    </div>
  );
};

export default Parallax;
