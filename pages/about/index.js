import React, {useState} from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop
}from 'react-icons/si';

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// counter
import CountUp from "react-countup";

import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Web Deveoper - Gadget Connect Limited',
        stage: '2022 - Up to Date',
      },
      {
        title: 'Web Developer - Value Connection Services Limited',
        stage: '2019 - 2022',
      },
      {
        title: 'Intern - ICT Authority of Kenya',
        stage: '2018 - 2019',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'React JS - FreeCodeCamp',
        stage: '2019',
      },
      {
        title: 'Mathematics and Computer Science Degree - Taita Taveta University',
        stage: 'Class of 2017',
      },
      {
        title: 'Certificate of Secondary Education - Moi Gesusu High School',
        stage: 'Class of 2012',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
  <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles />

    {/* avatar img */}
    {/* <motion.div 
    className="hidden xl:flex absolute bottom-0 -left-[370px] md:hidden"
    variants={fadeIn('right', 0,2)}
    initial='hidden'
    animate='show' exit='hidden'>
      <Avatar/>
    </motion.div> */}
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row
    gap-x-6">
      {/* text */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2
        variants={fadeIn('right', 0,2)}
        initial='hidden'
        animate='show' exit='hidden'
        className="h2 pt-8 text-3xl mb-2">Captivating <sapn className='text-accent'>stories</sapn> birth magnificent designs.</motion.h2>
        <motion.p
        variants={fadeIn('right', 0,4)}
        initial='hidden'
        animate='show' exit='hidden'
        className="max-w-[500px] mx-auto xl:mx-0 mb-1 xl:mb-12 xl:px-0">
          5 years ago, I began freelancing as developer. Since then, I&apos;ve
          done remote work for agencies, consulted for startups, and 
          collaborated on digital products for business and consumer user.
        </motion.p>
        {/* counters */}
        <motion.div 
        variants={fadeIn('right', 0,6)}
        initial='hidden'
        animate='show' exit='hidden'
        className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl-mx-0">
          <div className="flex flex-1 xl:gap-x-6 mb-10">
            {/* experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent
              mb-2">
                <CountUp start={0} end={6} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4]
              max-w-[100px]">Years of experience</div>
            </div>
            {/* clients */}
            <div className="relative flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent
              mb-2">
                <CountUp start={0} end={13} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4]
              max-w-[100px]">Satisfied clients</div>
            </div>
             {/* project */}
             <div className="relative flex-1 ">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent
              mb-2">
                <CountUp start={0} end={35} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4]
              max-w-[100px]">Finished Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* info */}
      <motion.div
      variants={fadeIn('left', 0,4)}
      initial='hidden'
      animate='show' exit='hidden'
      className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-1">
        {aboutData.map((item, itemIndex) =>{
          return (
          <div 
          key={itemIndex} 
          className={`${index === itemIndex && 
            'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
          } cursor-pointer capitalize xl:text-lg relative after:w-8
          after:h-[2px] after:bg-white after:absolute after:-bottom-1 
          after:left-0`}
          onClick={()=> setIndex(itemIndex)}
          >
            {item.title}
            </div>
            );
        })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2
        xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) =>{
            return (
            <div key={itemIndex}
            className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center
            text-white/60">
              {/* title */}
              <div className="font-light mb-1 md:mb-0">{item.title}</div>
              <div className="hidden md:flex">-</div>
              <div>{item.stage}</div>
              <div className="flex gap-x-4">
                {/* icons */}
              {item.icons?.map((icon, itemIndex)=> {
                return( 
                <div key={itemIndex} className="text-2xl text-white">
                  {icon}
                  </div>
                  );
              })}
              </div>
              
            </div>
            );
          })}
        </div>
      </motion.div>
      </div>
  </div>
  );
};

export default About;
