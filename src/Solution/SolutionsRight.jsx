import React, { useState } from 'react'

const SolutionsRight = () => {
  const words = [
    "UX Design", 
    "UI Design", 
    "Website Redesign", 
    "Agency", 
    "Web Development", 
    "Responsive Design", 
    "User Interface", 
    "User Experience", 
    "Prototype", 
    "Wireframe", 
    "Frontend", 
    "Backend"
  ];

  const hoverText = [
    {
      word: "UX Design", 
      paragraph: "UX Design focuses on the user's experience to create intuitive, engaging, and efficient interfaces."
    },
    {
      word: "UI Design", 
      paragraph: "UI Design ensures that the interface is visually appealing, consistent, and easy to navigate."
    },
    {
      word: "Website Redesign", 
      paragraph: "Website Redesign involves updating the website’s structure, layout, and functionality for better performance."
    },
    {
      word: "WebDev", 
      paragraph: "Web Development combines front-end and back-end programming to create dynamic, fully functional websites."
    }
  ];

  const [isOpen, setIsOpen] = useState(true);

  let openClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full md:w-[70%] font-[Poppins]">
      <p className="text-[clamp(20px,3vw,60px)] leading-none tracking-tighter font-light">
        Introducing our innovative AI tool designed to enhance creativity and productivity. With cutting-edge technology, it generates unique ideas, optimizes workflows, and transforms your concepts into reality in seconds. Try it today!
      </p>

      <div 
        style={{ gridTemplateRows: isOpen ? '20px 200px 1fr' : '20px 0fr 0fr' }} 
        className="grid border-t-2 border-white mt-5 py-3 transition-all duration-500"
      >
        <h1 
          onClick={openClose} 
          className="text-5xl font-semibold cursor-pointer flex items-center gap-5 mt-5"
        >
          UI UX DESIGN
          <div 
            className={`w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent transition-transform duration-500 ${isOpen ? 'border-b-8 border-b-white rotate-[360deg]' : 'border-b-8 border-b-white rotate-180'}`}
          ></div>
        </h1>

        <div className="my-8 sm:my-10 flex gap-1 flex-wrap cursor-pointer overflow-hidden">
          {
            words.map((word, index) => (
              <span key={index} className="border text-sm sm:text-[16px] border-white inline-block rounded-full px-1 relative h-fit">
                {word}
              </span>
            ))
          }   
        </div>

        <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
          {
            hoverText.map((item, index) => (
              <div key={index} className="solution-text flex items-center justify-between border-t border-white relative py-10 overflow-hidden cursor-pointer hover:pl-[.5vw] transition-all duration-300">
                <h2 className="text-lg w-[25%] sm:text-3xl">{item.word}</h2>
                <p className="w-[70%] text-sm sm:text-[16px]">{item.paragraph}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default SolutionsRight;
