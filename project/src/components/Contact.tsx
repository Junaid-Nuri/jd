import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 98765 43210',
      subtitle: 'Call us anytime'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'borivali@jdinstituteoffashiontechnology.com',
      subtitle: 'Send us a message'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'JD Institute Borivali, 1 Ramji Residency Off Chandavarkar Road, Behind Shangar Showroom, Borivali West Mumbai 400 092',
      subtitle: 'Visit our campus'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon - Sat: 9AM - 6PM',
      subtitle: 'We are open'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#EBB417] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EBB417] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-[#EBB417]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#EBB417] to-[#EBB417] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your creative journey? Contact us today and let's discuss how we can help you achieve your dreams.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#EBB417] to-[#EBB417] rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-black" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-800 font-medium mb-1 break-words">{item.details}</p>
                  <p className="text-gray-500 text-sm">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;