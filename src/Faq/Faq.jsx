import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const Faq = () => {
  const faqData = [
    {
      question: "What is UX Design?",
      answer: "UX Design focuses on optimizing user experiences by creating intuitive, accessible, and efficient interactions between users and products or systems."
    },
    {
      question: "What is UI Design?",
      answer: "UI Design refers to the visual design and interactive elements of a product, ensuring that it's visually appealing, easy to navigate, and user-friendly."
    },
    {
      question: "How long does it take to redesign a website?",
      answer: "Website redesigns can take anywhere from a few weeks to several months, depending on the complexity of the project and the features required."
    },
    {
      question: "What is responsive design?",
      answer: "Responsive design ensures that your website looks great on all devices, from desktops to mobile phones, by adapting it to different screen sizes."
    },
    {
      question: "Why is web development important?",
      answer: "Web development is essential for creating functional websites and web applications that serve as a digital presence for businesses, and enhance user engagement."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className='w-full py-5 text-white border-t-2 border-b-2 border-white my-5'>
      <h1 className='text-[clamp(30px,5vw,80px)] font-bold leading-tight py-10 tracking-tighter font-[Raleway] text-center mb-10 lg:w-[40%] w-full m-auto'>
        Frequently Asked Questions
      </h1>

      {faqData.map((item, index) => (
        <div key={index} className='py-[10vw] sm:py-[40px] border-t-2 border-white w-full lg:w-[70%] m-auto font-[Poppins]' style={{ opacity: openIndex === index ? 1 : 0.7 }}>
          <h2
            onClick={() => toggleAnswer(index)}
            className='text-[clamp(20px,4vw,40px)] cursor-pointer mb-5'
          >
            {item.question}
          </h2>

          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: openIndex === index ? 1 : 0,
                height: openIndex === index ? '60px' : 0
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {openIndex === index && (
                <p className='text-sm sm:text-lg'>{item.answer}</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Faq;
