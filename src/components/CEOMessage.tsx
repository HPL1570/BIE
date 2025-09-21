import React from 'react';
import { motion } from 'framer-motion';

export const CEOMessage: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            {/* CEO Photo */}
            <div className="lg:w-1/3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGKQRBbXtC00JCGwA2QEKYpB-Cg41GLzE0Cw&s"
                alt="CEO"
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
            
            {/* Message Content */}
            <div className="lg:w-2/3 p-8 lg:p-12">
              <div className="mb-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Message from our Company
                </h2>
                <div className="w-20 h-1 bg-yellow-500"></div>
              </div>
              
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                "With over three decades of trusted service, our company has connected markets 
                across the globe. We believe in quality, integrity, and long-lasting partnerships. 
                Our mission is to deliver excellence with every shipment, ensuring that our clients 
                receive not just products, but solutions that drive their businesses forward."
              </blockquote>
              
              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="font-semibold text-gray-900">John Mitchell</p>
                <p className="text-gray-600">Chief Executive Officer</p>
                <p className="text-sm text-gray-500">GlobalTrade Corporation</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};