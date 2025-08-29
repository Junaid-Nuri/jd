import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, Calendar } from 'lucide-react';

const AwardsRecognition = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [awards, setAwards] = useState(0);
  const [legacy, setLegacy] = useState(1988);

  const celebrityImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      caption: 'With Industry Leaders',
      event: 'Fashion Week 2023'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
      caption: 'Celebrity Collaboration',
      event: 'Award Ceremony'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      caption: 'International Recognition',
      event: 'Global Fashion Summit'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
      caption: 'Media Coverage',
      event: 'Press Conference'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % celebrityImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Animated counters
  useEffect(() => {
    const awardTimer = setInterval(() => {
      setAwards((prev) => {
        if (prev < 1000) {
          return prev + 25;
        }
        clearInterval(awardTimer);
        return 1000;
      });
    }, 50);

    const legacyTimer = setInterval(() => {
      setLegacy((prev) => {
        const currentYear = new Date().getFullYear();
        if (prev < currentYear) {
          return prev + 1;
        }
        clearInterval(legacyTimer);
        return currentYear;
      });
    }, 100);

    return () => {
      clearInterval(awardTimer);
      clearInterval(legacyTimer);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % celebrityImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + celebrityImages.length) % celebrityImages.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #00aaff 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #00d4aa 2px, transparent 2px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Awards &<br />
                <span className="text-[#00aaff]">Recognition</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00aaff] to-[#00d4aa]" />
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
              Celebrating decades of excellence in fashion education and industry recognition. 
              Our achievements reflect our commitment to nurturing creative talent and shaping 
              the future of design.
            </p>

            {/* Animated Statistics */}
            <div className="grid grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center lg:text-left"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Award className="w-8 h-8 text-[#00aaff]" />
                  <motion.span 
                    className="text-4xl md:text-5xl font-bold text-[#00aaff]"
                    key={awards}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {awards.toLocaleString()}+
                  </motion.span>
                </div>
                <p className="text-gray-400 font-medium">Awards Won</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center lg:text-left"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Calendar className="w-8 h-8 text-[#00d4aa]" />
                  <motion.span 
                    className="text-4xl md:text-5xl font-bold text-[#00d4aa]"
                    key={legacy}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Since {legacy}
                  </motion.span>
                </div>
                <p className="text-gray-400 font-medium">Legacy of Excellence</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#00aaff]/10 to-[#00d4aa]/10 rounded-3xl p-6">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                {/* Image Display */}
                <div className="relative w-full h-full">
                  {celebrityImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ 
                        opacity: index === currentSlide ? 1 : 0,
                        scale: index === currentSlide ? 1 : 1.1
                      }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                      <img
                        src={image.src}
                        alt={image.caption}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Image Caption */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {image.caption}
                        </h3>
                        <p className="text-gray-300">
                          {image.event}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {celebrityImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentSlide 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating decorations */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-[#00aaff] to-[#00d4aa] rounded-full opacity-80"
            />
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#00d4aa] to-[#ffd700] rounded-full opacity-70"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;