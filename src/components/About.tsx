import { motion } from 'framer-motion';
import { Code, Book, Coffee, Heart } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '20+' },
  { label: 'Companies Worked', value: '7+' },
  { label: 'Client Satisfaction', value: '90%' },
];

const interests = [
  { icon: Code, label: 'Coding', description: 'Passionate about creating clean, efficient code' },
  { icon: Book, label: 'Learning', description: 'Continuously expanding knowledge in new technologies' },
  { icon: Coffee, label: 'Coffee', description: 'Fueling creativity one cup at a time' },
  { icon: Heart, label: 'Health', description: 'Maintaining work-life balance through fitness' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm Lyudommuny a passionate developer with a love for creating beautiful, functional, and user-friendly applications.
            Always eager to learn and take on new challenges.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
            >
              <motion.p
                className="text-4xl font-bold text-indigo-600 dark:text-indigo-400"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio Section with responsive image card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16"
        >
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Started my journey as a self-taught developer, driven by curiosity and passion for technology.
                Over the years, I've worked with various technologies and frameworks, always staying up-to-date
                with the latest industry trends.
              </p>
              <p>
                My experience spans from frontend development with React and TypeScript to backend development
                with Node.js and Python. I believe in writing clean, maintainable code and creating intuitive
                user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Enhanced Image Card */}
          <div className="order-1 md:order-2 flex justify-center items-center">
            <motion.div 
              className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[320px] lg:max-w-[380px] aspect-square"
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              {/* Animated Background Layer */}
              <motion.div
                className="absolute -inset-4 rounded-2xl opacity-75"
                style={{
                  background: 'linear-gradient(45deg, rgba(99,102,241,0.3), rgba(168,85,247,0.3), rgba(236,72,153,0.3))',
                  filter: 'blur(15px)',
                }}
                variants={{
                  initial: { opacity: 0.5, scale: 0.95 },
                  hover: { 
                    opacity: 1, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }
                }}
              />

              {/* Main Card Container */}
              <motion.div 
                className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                variants={{
                  hover: { 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  },
                  tap: { scale: 0.98 }
                }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src="/ldn-portfolio/muny.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                    variants={{
                      initial: { scale: 1 },
                      hover: {
                        scale: 1.1,
                        transition: { duration: 0.4, ease: "easeOut" }
                      }
                    }}
                  />

                  {/* Animated Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20"
                    variants={{
                      initial: { opacity: 0 },
                      hover: { 
                        opacity: 1,
                        transition: { duration: 0.3 }
                      }
                    }}
                  />

                  {/* Animated Frame */}
                  <motion.div
                    className="absolute inset-0"
                    variants={{
                      initial: {
                        opacity: 0.3,
                        background: 'linear-gradient(to right, transparent 0%, transparent 100%)'
                      },
                      hover: {
                        opacity: 1,
                        background: [
                          'linear-gradient(to right, rgba(99,102,241,0.2) 0%, transparent 100%)',
                          'linear-gradient(to bottom, rgba(168,85,247,0.2) 0%, transparent 100%)',
                          'linear-gradient(to left, rgba(236,72,153,0.2) 0%, transparent 100%)',
                          'linear-gradient(to top, rgba(99,102,241,0.2) 0%, transparent 100%)'
                        ],
                        transition: {
                          background: {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }
                        }
                      }
                    }}
                  />
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute inset-0 border-2 border-white/10 dark:border-gray-700/30 rounded-xl"
                  variants={{
                    initial: { opacity: 0.5 },
                    hover: { 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }
                  }}
                />

                {/* Corner Accents */}
                {[
                  'top-2 left-2',
                  'top-2 right-2',
                  'bottom-2 left-2',
                  'bottom-2 right-2'
                ].map((position, index) => (
                  <motion.div
                    key={index}
                    className={`absolute w-4 h-4 ${position}`}
                    variants={{
                      initial: { opacity: 0, scale: 0 },
                      hover: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          delay: index * 0.1,
                          duration: 0.3
                        }
                      }
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-sm opacity-75" />
                    <div className="absolute inset-0.5 bg-white dark:bg-gray-800 rounded-full" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Interests & Hobbies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-12 h-12 mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center"
                >
                  <interest.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </motion.div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{interest.label}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}