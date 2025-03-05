import { motion, useAnimationFrame, animate } from 'framer-motion';
import { useRef, useState } from 'react';

const companies = [
  {
    logo: '/ldn-portfolio/companies/ibm.svg'
  },
  {
    logo: '/ldn-portfolio/companies/atlassian.svg'
  },
  {
    logo: '/ldn-portfolio/companies/google.webp'
  },
  {
    logo: '/ldn-portfolio/companies/meta.svg'
  },
  {
    logo: '/ldn-portfolio/companies/microsoft.webp'
  },
  {
    logo: '/ldn-portfolio/companies/amazon.svg'
  },
  {
    logo: '/ldn-portfolio/companies/netflix.png'
  }
];

const DUPLICATED_COMPANIES = [...companies, ...companies, ...companies];

export default function Companies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);
  const velocityRef = useRef(0.5);
  const [isHovered, setIsHovered] = useState(false);

  useAnimationFrame(() => {
    if (!containerRef.current) return;

    // Smoothly adjust velocity based on hover state
    const targetVelocity = isHovered ? 0 : 0.5;
    velocityRef.current += (targetVelocity - velocityRef.current) * 0.1;

    // Only update scroll position if there's meaningful velocity
    if (Math.abs(velocityRef.current) > 0.01) {
      scrollRef.current += velocityRef.current;
      
      if (scrollRef.current >= containerRef.current.scrollWidth / 3) {
        scrollRef.current = 0;
      }
      
      containerRef.current.scrollLeft = scrollRef.current;
    }
  });

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-[#0a0a1b]">
      {/* Hero-style Background */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10"
          style={{
            maskImage: 'radial-gradient(circle at center, transparent 40%, black)',
            WebkitMaskImage: 'radial-gradient(circle at center, transparent 40%, black)'
          }}
        />

        {/* Noise texture */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url("/noise.png")',
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Moving stars/particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: 'linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}
        />
      </div>

      {/* Logos */}
      <div 
        ref={containerRef}
        className="overflow-hidden relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center gap-20 sm:gap-24 md:gap-32 lg:gap-40">
          {DUPLICATED_COMPANIES.map((company, idx) => (
            <motion.img
              key={idx}
              src={company.logo}
              alt="Company logo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: idx * 0.1,
                duration: 0.3 
              }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              className="h-6 sm:h-7 w-auto object-contain flex-shrink-0 opacity-90 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}