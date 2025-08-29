import React from 'react';
import { motion } from 'framer-motion';

const LifeAtJD = () => {
  const galleryImages = [
    {
      id: 1,
      src: '/image1.webp',
      alt: 'Fashion Design Class',
      className: 'col-span-2 row-span-2'
    },
    {
      id: 2,
      src: '/image2.webp',
      alt: 'Student Workshop',
      className: 'col-span-1 row-span-1'
    },
    {
      id: 3,
      src: '/image3.webp',
      alt: 'Creative Session',
      className: 'col-span-1 row-span-1'
    },
    {
      id: 4,
      src: '/image4.webp',
      alt: 'Design Studio',
      className: 'col-span-1 row-span-2'
    },
    {
      id: 5,
      src: '/image5.webp',
      alt: 'Fashion Show',
      className: 'col-span-2 row-span-1'
    },
    {
      id: 6,
      src: '/image6.webp',
      alt: 'Student Collaboration',
      className: 'col-span-1 row-span-1'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-[20rem] font-black text-gray-900 select-none"
          style={{ fontSize: 'clamp(8rem, 20vw, 20rem)' }}
        >
          MOMENTS
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#EBB417] tracking-wider uppercase mb-4">
            BEST CAPTURED
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#EBB417] mb-6">
            LIFE AT JD
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#EBB417] to-[#EBB417] mx-auto" />
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: { 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`${image.className} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer`}
            >
              <div className="relative w-full h-full">
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">
                      {image.alt}
                    </p>
                  </div>
                </div>

                {/* Floating dot */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                  className="absolute top-4 right-4 w-3 h-3 bg-[#EBB417] rounded-full opacity-0 group-hover:opacity-100"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Grid (smaller screens) */}
        <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
          {galleryImages.slice(0, 4).map((image, index) => (
            <motion.div
              key={`mobile-${image.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAtJD;