import React from 'react';
import AboutCard from './AboutCard';

const About = () => {
  const cardData = [
    { heading: '$600M+', text: 'in funding secured for our clients across various industries.' },
    { heading: '500+', text: 'successful projects completed worldwide.' },
    { heading: '$120M+', text: 'raised in capital for tech startups in 2023.' },
    { heading: '10,000+', text: 'businesses supported globally through our network.' },
    { heading: '98%', text: 'client satisfaction rate based on our services.' },
  ];

  return (
    <div className='flex gap-1 flex-wrap justify-center my-10'>
      {cardData.map((data, index) => (
        <AboutCard key={index} width={index > 2 ? true : false} heading={data.heading} text={data.text} />
      ))}
    </div>
  );
};

export default About;
