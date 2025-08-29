import React from 'react';
import { motion } from 'framer-motion';

const TopPlacements = () => {
  const brands = [
    { name: 'Logo 1', logo: '/logo1.webp' },
    { name: 'Logo 2', logo: '/logo2.webp' },
    { name: 'Logo 3', logo: '/logo3.webp' },
    { name: 'Logo 4', logo: '/logo4.webp' },
    { name: 'Logo 5', logo: '/logo5.webp' },
    { name: 'Logo 6', logo: '/logo6.webp' },
    { name: 'Logo 7', logo: '/logo7.webp' },
    { name: 'Logo 8', logo: '/logo8.webp' },
    { name: 'Logo 9', logo: '/logo9.webp' },
    { name: 'Logo 10', logo: '/logo10.webp' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Top <span className="text-[#EBB417]">Placements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#EBB417] to-[#EBB417] mx-auto" />
        </motion.div>

        {/* Marquee Animation */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex items-center space-x-16 whitespace-nowrap"
            >
              {[...brands, ...brands].map((brand, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  className="flex-shrink-0 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ minWidth: '200px', height: '120px' }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPlacements;