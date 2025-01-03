import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { timelineData } from '../data/timeline';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      style={{
        backgroundColor: '#0a111f',
        backgroundImage: 'radial-gradient(#4a5568 1px, transparent 1px)',
        backgroundSize: '20px 20px',  // Controls the spacing of the dots
        position: 'relative',
        color: 'white',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="w-1/2 pr-8 pl-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-white p-6 rounded-lg shadow-md ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-indigo-600 font-medium">{item.company}</p>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </motion.div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center z-10"
                >
                  {item.icon === 'work' ? (
                    <Briefcase className="w-6 h-6 text-white" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-white" />
                  )}
                </motion.div>

                {/* Empty space for the other side */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Companies Section in the background (Carousel without box frame and transparent background) */}
      <div className="mt-20 py-10 relative z-10">
        <motion.h3 
          className="text-2xl font-bold text-center text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted by Industry Leaders
        </motion.h3>
        <Swiper
      modules={[Autoplay]}
      slidesPerView={4}
      spaceBetween={30}
      autoplay={{
        delay: 2000, // No delay between slides
        disableOnInteraction: false, // Keep autoplay even after user interaction
      }}
      loop={true} // Infinite loop
      speed={600} // The speed at which slides transition
      style={{ background: 'transparent', zIndex: 1 }}
      className="swiper-container"
    >
          <SwiperSlide className="flex items-center justify-center bg-transparent">
            <img src="/ldn-portfolio/companies/meta.svg" alt="Meta" className="h-12 brightness-150 contrast-200" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-transparent">
            <img src="/ldn-portfolio/companies/microsoft.webp" alt="Microsoft" className="h-12 brightness-150 contrast-200" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-transparent">
            <img src="/ldn-portfolio/companies/netflix.png" alt="Netflix" className="h-12 brightness-150 contrast-200" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-transparent">
            <img src="/ldn-portfolio/companies/ibm.svg" alt="IBM" className="h-12 brightness-150 contrast-200" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-transparent">
            <img src="/ldn-portfolio/companies/amazon.svg" alt="Amazon" className="h-12 brightness-150 contrast-200" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-transparent">
            <img src="/ldn-portfolio/companies/atlassian.svg" alt="Atlassian" className="h-12 brightness-150 contrast-200" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-transparent">
            <img src="/ldn-portfolio/companies/google.webp" alt="Google" className="h-12 brightness-150 contrast-200" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-transparent">
            <img src="/ldn-portfolio/companies/uber.svg" alt="Uber" className="h-12 brightness-150 contrast-200" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

