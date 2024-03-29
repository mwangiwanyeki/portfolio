// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {BsArrowRight} from 'react-icons/bs'

import Image from 'next/image';

// import required modules
import { Pagination } from 'swiper';

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Sushi App',
          path: '/proj11.png',
          proj_url: 'https://sushipap-app.netlify.app/',
        },
        {
          title: 'CarHub',
          path: '/proj22.png',
          proj_url: 'https://carhub-website.netlify.app/',
        },
        {
          title: 'Real-Estate Website',
          path: '/realestate.png',
          proj_url: 'https://real-estate-bob-home.vercel.app/',
        },
        {
          title: 'Creative Agency Landing Page',
          path: '/creative-agency1.png',
          proj_url: 'https://creative-agency-landing-page.netlify.app/',
        },
      ],
    },
    {
      images: [
        {
          title: 'Travel App',
          path: '/travel-app.png',
          proj_url: 'https://travel-app-mwangiwanyeki.vercel.app/',
        },
        {
          title: 'CarHub',
          path: '/proj22.png',
          proj_url: 'https://carhub-website.netlify.app/',
        },
        {
          title: 'Consultancy Website',
          path: '/proj33.png',
          proj_url: 'https://topstrategiesconsultants.com/',
        },
        {
          title: 'Logistics Website',
          path: '/proj44.png',
          proj_url: 'https://tetrajets.com/',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
    spaceBetween={10}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className='h-[435px] sm:h-[580px] overflow-clip'
    >
      {workSlides.slides.map((slide, index)=> {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, index)=>{
              return (
              <div key={index} className='relative rounded-lg overflow-hidden flex items-center
              justify-center group'>
                <div className='flex items-center justify-center relative overflow-hidden group'>
                  {/* image */}
                  <Image src={image.path} width={400} height={400} alt='' />
                  {/* overlay gradient */}
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent
                  via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 
                  transition-all duration-700'>
                  </div>
                  {/* title */}
                  <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10
                  group-hover:xl:-translate-y-20 transition-all duration-300'>
                    <div className='flex items-center gap-x-3 text-[13px] tracking-[0.2em]'>
                      {/* title part 1 */}
                      <div className='delay-100' target="_blank"> <a href={image.proj_url} target='_blank'>LIVE</a></div>
                      {/* title part 2 */}
                      <div className='translate-y-[500%] group-hover:translate-y-0 
                      transition-all duration-300 delay-150'>
                        {image.title}
                      </div>
                      {/* icon */}
                      <div><BsArrowRight /></div>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}  
            </div>
           
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
