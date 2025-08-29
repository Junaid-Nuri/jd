import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const MeetDirectors = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-[#00aaff] tracking-wider uppercase mb-2">
                  JD INSTITUTE BORIVALI
                </p>
                <h2 className="text-5xl md:text-6xl font-bold text-[#00aaff] leading-tight mb-6">
                  MEET THE<br />
                  DIRECTORS
                </h2>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Preeti Kapoor & Shital Anand
                </h3>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    At the helm of JD Institute Borivali are Preeti Kapoor and Shital Anand — dynamic leaders 
                    who bring together over two decades of expertise in HR, design, leadership, and global 
                    industry experience.
                  </p>
                  
                  <p>
                    Preeti's background in HR and psychotherapy strengthens talent development and student 
                    engagement, while Shital, a certified jewelry design professional with corporate banking 
                    experience, offers a blend of creativity and strategic insight.
                  </p>
                  
                  <p>
                    Together, they shape a future-ready learning environment that empowers students to thrive 
                    in fashion, interior, jewelry, and graphic design.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="relative bg-gradient-to-br from-[#00aaff]/10 to-[#00d4aa]/10 rounded-3xl p-4 shadow-2xl"
            >
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden aspect-video group cursor-pointer">
                <img
                  src="/bg2.webp"
                  alt="Directors Video"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <Play className="w-8 h-8 text-[#00aaff] ml-1" />
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    delay: 1
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#00aaff] to-[#00d4aa] rounded-full"
                />
                
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    delay: 2.5
                  }}
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-[#00d4aa] to-[#ffd700] rounded-full opacity-40"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetDirectors;