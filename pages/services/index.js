// components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Services = () => {
  return (
  <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-6 mt-10'>
        {/* text */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-1 xl:mb-0'>
          <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 xl:mt-8 pt-15 mb-1 mt-4 text-3xl'>My Services<span className='text-accent'>.</span></motion.h2>
          <motion.p
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
          Whether I&apos;m working on a website, or other digital product, 
          I bring my commitment to design excellence and user-centered thinking to every 
          project I work on.
          </motion.p>
        </div>
         {/* slider */}
        <motion.div 
        variants={fadeIn('down', 0.6)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='w-full xl:max-w-[65%]'>
          <ServiceSlider />
        </motion.div>
        
      </div>
    </div>
    <Bulb />
  </div>
  );
};

export default Services;
