import React from 'react';
import { motion } from 'framer-motion';

const TopAlumni = () => {
  const alumni = [
    {
      id: 1,
      name: 'Shane Peacock',
      title: 'Fashion Designer',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      achievement: 'International Designer'
    },
    {
      id: 2,
      name: 'Rocky Star',
      title: 'Celebrity Designer',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
      achievement: 'Bollywood Fashion'
    },
    {
      id: 3,
      name: 'Shruti Sancheti',
      title: 'Contemporary Designer',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      achievement: 'Sustainable Fashion'
    },
    {
      id: 4,
      name: 'Priya Chhabria',
      title: 'Luxury Designer',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
      achievement: 'Couture Specialist'
    },
    {
      id: 5,
      name: 'Anand Kabra',
      title: 'Avant-garde Designer',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg',
      achievement: 'Fashion Week Regular'
    },
    {
      id: 6,
      name: 'Nikhil Thampi',
      title: 'Red Carpet Designer',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
      achievement: 'Celebrity Stylist'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Top <span className="text-[#00aaff]">Alumni</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00aaff] to-[#00d4aa] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the exceptional talents who have made their mark in the fashion and design industry
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {alumni.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6, 
                  delay: index * 0.1 
                }
              }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Oval Image Container */}
              <div className="relative mx-auto mb-4 w-32 h-40 md:w-36 md:h-44">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-full h-full rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500"
                  style={{
                    clipPath: 'ellipse(50% 60% at 50% 40%)'
                  }}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00aaff]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ 
                    scale: 1, 
                    rotate: 0,
                    transition: { 
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }
                  }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#00aaff] to-[#00d4aa] rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-white text-xs font-bold">★</span>
                </motion.div>
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="space-y-2"
              >
                <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#00aaff] transition-colors duration-300">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  {person.title}
                </p>
                <p className="text-xs text-[#00aaff] font-semibold">
                  {person.achievement}
                </p>
              </motion.div>

              {/* Hover Effect Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="w-16 h-0.5 bg-gradient-to-r from-[#00aaff] to-[#00d4aa] mx-auto mt-4 origin-center"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopAlumni;