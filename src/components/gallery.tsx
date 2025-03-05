import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react'; // Import X icon for close button

const galleryImages = [
  {
    src: '/ldn-portfolio/img (1).jpg',
    alt: 'Profile Picture',
    title: 'Main Profile'
  },
  {
    src: '/ldn-portfolio/1.jpg',
    alt: 'Profile Picture',
    title: 'Main Profile'
  },
  {
    src: '/ldn-portfolio/img (2).png',
    alt: 'Profile Picture',
    title: 'Main Profile'
  },
  {
    src: '/ldn-portfolio/img (18).png',
    alt: 'Profile Picture',
    title: 'Main Profile'
  },
  {
    src: '/ldn-portfolio/img (6).png',
    alt: 'Profile Picture',
    title: 'Main Profile'
  },
  {
    src: '/ldn-portfolio/img (14).png',
    alt: 'Profile Picture',
    title: 'Main Profile'
  },
  // Add more images here
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Gallery
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A collection of my personal and professional photographs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 cursor-pointer"
              onClick={() => openModal(image.src)}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="relative max-w-[90vw] max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button with improved visibility */}
                <motion.button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>

                {/* High-quality image display */}
                <motion.img
                  src={selectedImage}
                  alt="Full size image"
                  className="w-full h-full object-contain rounded-lg shadow-2xl"
                  style={{
                    maxHeight: '90vh',
                    width: 'auto',
                    margin: '0 auto',
                    filter: 'brightness(1.02) contrast(1.02)',
                  }}
                  layoutId={`image-${selectedImage}`}
                  loading="eager"
                  onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.opacity = '1';
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Loading indicator */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/50"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}