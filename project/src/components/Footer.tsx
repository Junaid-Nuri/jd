import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <img 
                src="/jd logo.webp" 
                alt="JD Institute Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">JD Institute</h3>
                <p className="text-gray-400 text-sm">Fashion Technology</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading fashion and interior design institute in Borivali. 
              Empowering creative minds with industry-relevant education and scholarship opportunities up to ₹75,000.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#EBB417] hover:to-[#EBB417] transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                'About Us',
                'Courses',
                'Scholarships',
                'Placements',
                'Gallery',
                'Contact',
                'Apply Now'
              ].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5, color: '#EBB417' }}
                    className="text-gray-300 hover:text-[#EBB417] transition-colors duration-200"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3"
              >
                <MapPin className="w-5 h-5 text-[#EBB417] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">JD Institute Borivali</p>
                  <p className="text-gray-400 text-sm">
                    1 Ramji Residency Off Chandavarkar Road,<br />
                    Behind Shangar Showroom, Borivali West<br />
                    Mumbai 400 092
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <Phone className="w-5 h-5 text-[#EBB417]" />
                <div>
                  <p className="text-gray-300">+91 98765 43210</p>
                  <p className="text-gray-400 text-sm">Mon-Sat 9AM-6PM</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3"
              >
                <Mail className="w-5 h-5 text-[#EBB417]" />
                <div>
                  <p className="text-gray-300">borivali@jdinstituteoffashiontechnology.com</p>
                  <p className="text-gray-400 text-sm">We reply within 24 hours</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 JD Institute of Fashion Technology Borivali. All rights reserved. | Scholarships Available
            </p>
            <div className="flex space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ color: '#EBB417' }}
                  className="text-gray-400 hover:text-[#EBB417] transition-colors duration-200"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;