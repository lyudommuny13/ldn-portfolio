import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-24 h-24">
        {/* Top Left Square */}
        <motion.div
          className="absolute top-0 left-0 w-10 h-10 bg-blue-400 rounded-sm"
          animate={{
            rotate: [0, 180, 360],
            x: [0, 10, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Top Right Square */}
        <motion.div
          className="absolute top-0 right-0 w-10 h-10 bg-blue-600 rounded-sm"
          animate={{
            rotate: [0, -180, -360],
            x: [0, -10, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Bottom Left Square */}
        <motion.div
          className="absolute bottom-0 left-0 w-10 h-10 bg-blue-600 rounded-sm"
          animate={{
            rotate: [0, -180, -360],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Bottom Right Square */}
        <motion.div
          className="absolute bottom-0 right-0 w-10 h-10 bg-blue-400 rounded-sm"
          animate={{
            rotate: [0, 180, 360],
            x: [0, -10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
} 