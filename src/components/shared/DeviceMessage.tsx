import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import MessageContent from './MessageContent';

export default function DeviceMessage() {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    // Auto-hide message after 5 seconds
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showMessage && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <MessageContent onClose={() => setShowMessage(false)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}