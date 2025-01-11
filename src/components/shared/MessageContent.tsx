import { motion } from 'framer-motion';
import { X, Monitor } from 'lucide-react';

interface MessageContentProps {
  onClose: () => void;
}

export default function MessageContent({ onClose }: MessageContentProps) {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3">
          <motion.div 
            className="flex items-center justify-between gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <Monitor className="w-5 h-5 text-white" />
              <p className="text-sm text-white font-medium">
                For the best experience, view on computer | This site is just a demo
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <motion.button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated border */}
      <motion.div 
        className="h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 5, ease: "linear" }}
      />
    </div>
  );
}