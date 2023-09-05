// components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Work = () => {
  return (
  <div className='h-full bg-primary/30 py-32 flex items-center mt-10'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-6 mt-10'>
        {/* text */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-2 xl:mb-0 mt-10'>
          <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 text-4xl xl:mt-8 mb-2 pt-15 mt-12'>My Work<span className='text-accent'>.</span></motion.h2>
          <motion.p
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='mb-2 max-w-[400px] mx-auto lg:mx-0'>
          As a skilled developer, I am dedicated 
          to turning ideas into innovative web applications. 
          Explore my latest projects and articles, showcasing 
          my expertise in React.js and web development.
          </motion.p>
        </div>
         {/* slider */}
        <motion.div 
        variants={fadeIn('down', 0.6)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='w-full xl:max-w-[65%]'>
          <WorkSlider />
        </motion.div>
        
      </div>
    </div>
    <Bulb />
  </div>
  );
};

export default Work;
