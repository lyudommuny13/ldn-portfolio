import { Code, Database, Globe, Palette, Server, Terminal, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend Development',
    icon: Globe,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Backend Development',
    icon: Server,
    skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs'],
  },
  {
    category: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
  },
  {
    category: 'DevOps',
    icon: Terminal,
    skills: ['Docker', 'AWS', 'CI/CD', 'Linux', 'Git', 'Nginx'],
  },
  {
    category: 'Programming Languages',
    icon: Code,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
  },
  {
    category: 'Design',
    icon: Palette,
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(99, 102, 241) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse'
            }
          }}
          style={{
            backgroundImage: 'linear-gradient(45deg, rgba(99, 102, 241, 0.1) 25%, transparent 25%, transparent 50%, rgba(99, 102, 241, 0.1) 50%, rgba(99, 102, 241, 0.1) 75%, transparent 75%, transparent)',
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Skills & Expertise
              </span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-indigo-600" />
              </motion.div>
            </h2>
          </motion.div>
        </motion.div>
        
        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Card Background Gradient */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
                
                {/* Card Content */}
                <div className="relative bg-white p-6 rounded-xl">
                  {/* Icon */}
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </motion.div>
                  
                  {/* Category Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {category.category}
                  </h3>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="relative px-3 py-1 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 rounded-full text-sm font-medium group-hover:shadow-sm transition-all duration-300"
                        whileHover={{ 
                          scale: 1.05,
                          y: -2
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.3,
                          delay: skillIndex * 0.1
                        }}
                      >
                        {skill}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300" />
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}