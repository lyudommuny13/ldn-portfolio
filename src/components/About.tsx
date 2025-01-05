import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { Users, Clock, Code, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="relative group"
            variants={fadeInUp}
          >
            {/* Main Image Card */}
            <motion.div 
              className="relative z-10 bg-white p-3 rounded-2xl shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src="/ldn-portfolio/muny.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-30 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />

            {/* Floating Info Cards */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-20 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Code className="w-5 h-5 text-indigo-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Full Stack</p>
                <p className="text-xs text-gray-500">Developer</p>
              </div>
            </motion.div>

            <motion.div 
              className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg z-20 flex items-center gap-3"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Globe className="w-5 h-5 text-indigo-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Based in</p>
                <p className="text-xs text-gray-500">Cambodia</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              Hi, I'm Lyudommuny, a passionate Full Stack Developer and
              educator. I create content on Facebook through my page
              Lyudommuny Thol, where I share my knowledge and experience with the
              developer community.
            </motion.p>

            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              With extensive experience in modern web technologies and a strong
              foundation in both frontend and backend development, I help
              businesses build scalable solutions and mentor aspiring developers
              to achieve their goals.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={fadeInUp}
            >
              <motion.div 
                className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl border border-indigo-100 shadow-lg shadow-indigo-100/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-100 rounded-full opacity-50 blur-2xl" />
                <div className="relative">
                  <Clock className="w-8 h-8 text-indigo-600 mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">3+</h3>
                  <p className="text-gray-600 font-medium">Years Experience</p>
                </div>
              </motion.div>

              <motion.div 
                className="relative overflow-hidden bg-gradient-to-br from-violet-50 to-white p-6 rounded-2xl border border-violet-100 shadow-lg shadow-violet-100/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-violet-100 rounded-full opacity-50 blur-2xl" />
                <div className="relative">
                  <Users className="w-8 h-8 text-violet-600 mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">125K+</h3>
                  <p className="text-gray-600 font-medium">Followers</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}