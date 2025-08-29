import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Users } from 'lucide-react';

const TalkOfTown = () => {
  const [communityCount, setCommunityCount] = useState(0);

  const pressCards = [
    {
      id: 1,
      publication: 'Deccan Herald',
      headline: 'JD Institute Pioneers Sustainable Fashion Education',
      excerpt: 'Leading the way in eco-conscious design curriculum and industry partnerships.',
      date: '2024',
      logo: 'https://via.placeholder.com/120x40/1a365d/white?text=Deccan+Herald',
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 2,
      publication: 'Hindustan Times',
      headline: 'Fashion Institute Sets New Standards in Creative Education',
      excerpt: 'Innovative teaching methods and industry connections drive student success.',
      date: '2024',
      logo: 'https://via.placeholder.com/120x40/dc2626/white?text=Hindustan+Times',
      color: 'from-red-600 to-red-700'
    },
    {
      id: 3,
      publication: 'Times of India',
      headline: 'JD Institute Alumni Dominate Fashion Week',
      excerpt: 'Former students showcase collections at prestigious fashion events worldwide.',
      date: '2024',
      logo: 'https://via.placeholder.com/120x40/7c3aed/white?text=Times+of+India',
      color: 'from-purple-600 to-purple-700'
    },
    {
      id: 4,
      publication: 'Indian Express',
      headline: 'Innovation in Design Education Transforms Industry',
      excerpt: 'Technology-driven curriculum prepares students for future fashion landscape.',
      date: '2024',
      logo: 'https://via.placeholder.com/120x40/059669/white?text=Indian+Express',
      color: 'from-green-600 to-green-700'
    }
  ];

  // Animated counter
  useEffect(() => {
    const timer = setInterval(() => {
      setCommunityCount((prev) => {
        if (prev < 200000) {
          return prev + 5000;
        }
        clearInterval(timer);
        return 200000;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Talk of The <span className="text-[#00aaff]">Town</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00aaff] to-[#00d4aa] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what leading publications are saying about our innovative approach to fashion education
          </p>
        </motion.div>

        {/* Press Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pressCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              {/* Header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${card.color}`} />
              
              <div className="p-6">
                {/* Publication Logo */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-bold text-gray-800">
                    {card.publication}
                  </div>
                  <span className="text-xs text-gray-500">{card.date}</span>
                </div>

                {/* Content */}
                <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#00aaff] transition-colors duration-300">
                  {card.headline}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {card.excerpt}
                </p>

                {/* Read More Link */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-[#00aaff] font-semibold text-sm group-hover:text-[#0088cc] transition-colors duration-300"
                >
                  <span>Read More</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#00aaff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#00aaff] to-[#00d4aa] rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, white 2px, transparent 2px),
                               radial-gradient(circle at 80% 20%, white 2px, transparent 2px)`,
              backgroundSize: '60px 60px'
            }} />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center mb-6"
            >
              <Users className="w-16 h-16 mr-4" />
              <motion.div
                key={communityCount}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-6xl md:text-7xl font-black"
              >
                {communityCount.toLocaleString()}+
              </motion.div>
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join our growing community
            </h3>
            
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Be part of 2 Lakh+ students and professionals who are shaping the future of fashion and design
            </p>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-8 right-8 w-6 h-6 bg-white/20 rounded-full"
            />
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-8 left-8 w-8 h-8 bg-white/20 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TalkOfTown;