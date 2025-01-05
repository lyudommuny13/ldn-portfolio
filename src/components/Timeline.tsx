import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { timelineData } from '../data/timeline';

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-12 md:py-20 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gray-900">
        {/* Gradient Mesh Background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 0% 0%, rgba(99,102,241,0.15) 0%, transparent 50%),
              radial-gradient(circle at 100% 100%, rgba(168,85,247,0.15) 0%, transparent 50%)
            `
          }}
        />

        {/* Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px),
              linear-gradient(0deg, rgba(99,102,241,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-500/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

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
              className="relative pl-8"
            >
              {/* Glowing Line */}
              <motion.div 
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />

              <div className="absolute left-0 top-0 -translate-x-1/2">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/50"
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
                className="relative p-4 rounded-lg backdrop-blur-sm border border-white/10"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                }}
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
          {/* Central Timeline Line with Gradient */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
            style={{
              background: 'linear-gradient(180deg, rgba(99,102,241,0.5) 0%, rgba(168,85,247,0.5) 100%)',
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />

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
                    className="relative p-6 rounded-lg backdrop-blur-sm border border-white/10"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    }}
                  >
                    <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-200 rounded-full text-sm font-medium mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-indigo-300 font-medium">{item.company}</p>
                    <p className="text-gray-300 mt-2">{item.description}</p>

                    {/* Decorative Corner Elements */}
                    <div className="absolute top-0 left-0 w-20 h-20">
                      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-indigo-500/30" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-20 h-20">
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-indigo-500/30" />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center z-10 shadow-lg shadow-indigo-500/50"
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
    </section>
  );
}