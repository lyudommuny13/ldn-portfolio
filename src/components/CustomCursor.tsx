import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const checkPointer = () => {
      const element = document.elementFromPoint(mousePosition.x, mousePosition.y);
      const isClickable = element?.matches('button, a, input, textarea, select, [role="button"]');
      setIsPointer(!!isClickable);
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousemove', checkPointer);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousemove', checkPointer);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <>
      <motion.div
        className="hidden md:block fixed w-4 h-4 rounded-full bg-indigo-600/30 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      <motion.div
        className="hidden md:block fixed w-2 h-2 rounded-full bg-indigo-600 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 750,
          damping: 28,
        }}
      />
    </>
  );
} 