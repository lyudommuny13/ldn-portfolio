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
      className="py-12 md:py-20 relative"
      style={{
        backgroundColor: '#0f172a', // Darker blue background
        backgroundImage: 'radial-gradient(#4a5568 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        position: 'relative',
        color: 'white',
      }}
    >
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(180deg, rgba(15,23,42,0.97) 0%, rgba(15,23,42,0.95) 100%)',
          mixBlendMode: 'overlay',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>
        
        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-indigo-500/30"
            >
              <div className="absolute left-0 top-0 -translate-x-1/2">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/50"
                >
                  {item.icon === 'work' ? (
                    <Briefcase className="w-4 h-4 text-white" />
                  ) : (
                    <GraduationCap className="w-4 h-4 text-white" />
                  )}
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10"
              >
                <span className="inline-block px-2 py-1 bg-indigo-500/20 text-indigo-200 rounded-full text-xs font-medium mb-2">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-indigo-300 font-medium text-sm">{item.company}</p>
                <p className="text-gray-300 mt-2 text-sm">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-indigo-500/30" />
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
                <div className="w-1/2 pr-8 pl-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-200 rounded-full text-sm font-medium mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-indigo-300 font-medium">{item.company}</p>
                    <p className="text-gray-300 mt-2">{item.description}</p>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center z-10 shadow-lg shadow-indigo-500/50"
                >
                  {item.icon === 'work' ? (
                    <Briefcase className="w-6 h-6 text-white" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-white" />
                  )}
                </motion.div>

                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <div className="mt-12 md:mt-20 py-6 md:py-10 relative z-10">
        <motion.h3 
          className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted by Industry Leaders
        </motion.h3>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={600}
          style={{ background: 'transparent', zIndex: 1 }}
          className="swiper-container px-4"
        >
          <SwiperSlide className="flex items-center justify-center bg-transparent">
            <img src="/ldn-portfolio/companies/meta.svg" alt="Meta" className="h-8 md:h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-transparent">
            <img src="/ldn-portfolio/companies/microsoft.webp" alt="Microsoft" className="h-8 md:h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-transparent">
            <img src="/ldn-portfolio/companies/netflix.png" alt="Netflix" className="h-8 md:h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-transparent">
            <img src="/ldn-portfolio/companies/ibm.svg" alt="IBM" className="h-8 md:h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-transparent">
            <img src="/ldn-portfolio/companies/amazon.svg" alt="Amazon" className="h-8 md:h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-transparent">
            <img src="/ldn-portfolio/companies/atlassian.svg" alt="Atlassian" className="h-8 md:h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-transparent">
            <img src="/ldn-portfolio/companies/google.webp" alt="Google" className="h-8 md:h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-transparent">
            <img src="/ldn-portfolio/companies/uber.svg" alt="Uber" className="h-8 md:h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}