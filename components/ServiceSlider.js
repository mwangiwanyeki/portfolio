// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight} from 'react-icons/rx';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Building a brand identity from the ground up. Rebranding established businesses. Creating brand positioning. Developing a branding strategy.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'A well-designed website provides good user experience and helps your website visitors access and navigate your website with ease.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: ' Delivering comprehensive web development services with clear results and a clear development process. Aesthetic website and mobile apps',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Transform your brand with our exceptional copywriting service. ✓Native English writers ✓100% unique content ✓unlimited revisions.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: `Delivers on performance expectations. Experience in multiple industries. Reputation for strong. Highly reviewed account managers.`,
  },
];

const ServiceSlider = () => {
  return (
  <Swiper
  breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  
  }}
  freeMode={true}
  pagination={{
    clickable: true,
  }}
  modules={[FreeMode, Pagination]}
  className='h-[280px] overflow-clip'
  >
    {serviceData.map((item, index)=> {
      return (
        <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-2 py-3 flex
          sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]
          transition-all duration-300'>
            {/* icons */}
            <div className='text-4xl text-accent mb-2'>{item.icon}</div>
            {/* title and desc */}
            <div className='mb-5'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w[450px] leading-normal'>{item.description}</p>
            </div>
            {/* arrow */}
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent
              transition-all duration-300 leading-normal' />
            </div>
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>);
};

export default ServiceSlider;
