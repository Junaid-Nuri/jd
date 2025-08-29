import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PopularCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'Fashion',
      subtitle: 'DEGREE | DIPLOMA | CERTIFICATION | ONLINE',
      description: 'Fashion sparks cultural evolution and challenges norms. Our curriculum equip you with skills to understand consumer behavior, and create successful brands, preparing you to lead and innovate.',
      image: '/fashion.webp',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      title: 'Interior',
      subtitle: 'DEGREE | DIPLOMA | CERTIFICATION | ONLINE',
      description: 'Transform spaces to enhance lifestyle and well-being with our interior design courses, focusing on critical thinking, project management, and hands-on training to stay ahead of the curve.',
      image: '/interior.webp',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="courses" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular <span className="text-[#EBB417]">Courses</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#EBB417] to-[#EBB417] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your creative potential with our comprehensive programs designed to shape the next generation of design leaders
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 relative"
            >
              {/* Hover Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${course.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
              />
              
              {/* Image Container */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <motion.img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2"
                >
                  <span className="text-sm font-semibold text-gray-800">Popular</span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-500 mb-2 tracking-wider">
                    {course.subtitle}
                  </p>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {course.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {course.description}
                </p>

                <motion.button
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-center space-x-2 text-[#EBB417] font-semibold group-hover:text-[#d4a017] transition-colors duration-300"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className={`absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-r ${course.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;