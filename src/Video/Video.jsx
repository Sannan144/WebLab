import React from 'react';

const Video = () => {
  return (
    <div className='w-full h-auto px-10 my-20'>
      <video
        autoPlay
        muted
        loop
        preload="auto" 
        className='w-full h-auto object-cover rounded-2xl'
        src='https://lazarev.kiev.ua/la24/la-reel--min.mp4'
        type="video/mp4"
      />
    </div>
  );
}

export default Video;
