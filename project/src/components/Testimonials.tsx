import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      course: 'Fashion Design',
      year: '2023',
      rating: 5,
      message: 'JD Institute transformed my creative vision into reality. The faculty support and industry connections are exceptional.',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      size: 'large'
    },
    {
      id: 2,
      name: 'Arjun Mehta',
      course: 'Interior Design',
      year: '2022',
      rating: 5,
      message: 'The hands-on approach and modern curriculum prepared me for the real world. Now working with top design firms!',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
      size: 'medium'
    },
    {
      id: 3,
      name: 'Sneha Patel',
      course: 'Jewellery Design',
      year: '2023',
      rating: 5,
      message: 'Amazing experience! The mentorship program helped me launch my own jewelry brand successfully.',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
      size: 'small'
    },
    {
      id: 4,
      name: 'Rohit Kumar',
      course: 'Graphic Design',
      year: '2022',
      rating: 5,
      message: 'Best decision ever! The creative environment and industry exposure shaped my design thinking completely.',
      avatar: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
      size: 'medium'
    },
    {
      id: 5,
      name: 'Kavya Reddy',
      course: 'Fashion Design',
      year: '2023',
      rating: 5,
      message: 'The faculty treats you like family. Personalized attention and career guidance are outstanding.',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      size: 'large'
    },
    {
      id: 6,
      name: 'Vikram Singh',
      course: 'Interior Design',
      year: '2021',
      rating: 5,
      message: 'Incredible learning journey! The practical projects and industry partnerships made all the difference.',
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg',
      size: 'small'
    }
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2 p-8';
      case 'medium':
        return 'md:col-span-1 md:row-span-2 p-6';
      default:
        return 'md:col-span-1 md:row-span-1 p-6';
    }
  };

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
            Student <span className="text-[#00aaff]">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00aaff] to-[#00d4aa] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our successful alumni about their transformative journey at JD Institute
          </p>
        </motion.div>

        {/* Masonry Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-4 md:auto-rows-[200px] gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50, rotate: Math.random() * 4 - 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -5,
                rotate: Math.random() * 2 - 1,
                transition: { duration: 0.3 }
              }}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group ${getSizeClasses(testimonial.size)}`}
            >
              {/* Speech Bubble Tail */}
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white transform rotate-45 shadow-lg" />
              
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-8 h-8 text-[#00aaff]" />
              </div>

              {/* Content */}
              <div className="flex flex-col h-full">
                {/* Message */}
                <div className="flex-1 mb-6">
                  <p className={`text-gray-700 leading-relaxed ${testimonial.size === 'large' ? 'text-lg' : 'text-sm'}`}>
                    "{testimonial.message}"
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover shadow-lg"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {testimonial.course} • {testimonial.year}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#00aaff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`mobile-${testimonial.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 relative"
            >
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white transform rotate-45 shadow-lg" />
              
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.message}"
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.course} • {testimonial.year}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;