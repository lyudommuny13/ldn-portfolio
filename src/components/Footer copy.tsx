import { Github, Linkedin, Mail, Twitter, ExternalLink } from 'lucide-react';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:your.email@example.com", label: "Email" }
];

const backgroundImages = [
  'linear-gradient(45deg, rgba(99, 102, 241, 0.1) 25%, transparent 25%, transparent 50%, rgba(99, 102, 241, 0.1) 50%, rgba(99, 102, 241, 0.1) 75%, transparent 75%, transparent)',
  'linear-gradient(-45deg, rgba(139, 92, 246, 0.1) 25%, transparent 25%, transparent 50%, rgba(139, 92, 246, 0.1) 50%, rgba(139, 92, 246, 0.1) 75%, transparent 75%, transparent)',
  'linear-gradient(60deg, rgba(168, 85, 247, 0.1) 25%, transparent 25%, transparent 50%, rgba(168, 85, 247, 0.1) 50%, rgba(168, 85, 247, 0.1) 75%, transparent 75%, transparent)',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const controls = useAnimationControls();

  useEffect(() => {
    const animateBackground = async () => {
      for (let i = 0; ; i = (i + 1) % backgroundImages.length) {
        await controls.start({
          backgroundImage: backgroundImages[i],
          transition: { duration: 3, ease: "easeInOut" }
        });
      }
    };

    animateBackground();
  }, [controls]);

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white py-16 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        {/* Static dot pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(99, 102, 241) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Animated gradient stripes */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse'
            }
          }}
          style={{
            backgroundImage: backgroundImages[0],
            backgroundSize: '100px 100px'
          }}
        />
        
        {/* Color-changing gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={controls}
          initial={{ backgroundImage: backgroundImages[0] }}
          style={{ backgroundSize: '100px 100px' }}
        />
        
        {/* Moving gradient waves */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
            backgroundSize: '100% 100%'
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand Section with Card */}
          <motion.div 
            className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div className="space-y-2">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                LYUDOMMUNY THOL
              </h3>
              <p className="text-gray-400 font-light">
                Building digital experiences that matter
              </p>
            </motion.div>
            <div className="absolute -inset-[1px] -z-10 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur group-hover:opacity-30 transition-opacity" />
          </motion.div>
          
          {/* Social Links with Hover Cards */}
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group p-3 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <social.icon className="w-6 h-6 text-gray-400 group-hover:text-indigo-400 transition-colors relative z-10" />
                <span className="absolute -inset-[1px] -z-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 blur transition-opacity" />
                <motion.span
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-xs rounded-md opacity-0 group-hover:opacity-100 whitespace-nowrap"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  {social.label}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        {/* Footer Bottom with Animated Border */}
        <motion.div 
          className="relative mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-sm text-gray-400"
              whileHover={{ scale: 1.01 }}
            >
              © {currentYear} LYUDOMMUNY THOL. All rights reserved.
            </motion.p>
            <div className="flex gap-8">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <motion.a
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group relative text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                  whileHover={{ x: 3 }}
                >
                  <span className="relative z-10">{item}</span>
                  <motion.span
                    className="absolute inset-0 -z-10"
                    whileHover={{
                      opacity: [0, 1, 0],
                      transition: { duration: 1, repeat: Infinity }
                    }}
                  >
                    <ExternalLink className="w-4 h-4 absolute -right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}