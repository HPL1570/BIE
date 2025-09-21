import React from 'react';
import { motion } from 'framer-motion';
import { Fish, Waves, Snowflake, Award } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Premium Fish',
    description: 'We deliver a wide variety of sustainably sourced fishes, ensuring freshness and quality in every shipment.',
    image: 'https://thumbs.dreamstime.com/b/seafood-ice-23267947.jpg?auto=compress&cs=tinysrgb&w=800',
    icon: Fish,
    features: ['Multiple Varieties', 'Fresh & Frozen', 'Sustainably Sourced', 'Export Quality']
  },
  {
    id: 2,
    title: 'Premium Prawns',
    description: 'Our premium prawns are frozen with care to retain flavor, texture, and nutritional value for international markets.',
    image: 'https://thumbs.dreamstime.com/b/seafood-ice-23267947.jpg?auto=compress&cs=tinysrgb&w=800',
    icon: Waves,
    features: ['Premium Quality', 'Frozen Fresh', 'Rich Flavor', 'International Standards']
  }
];

const benefits = [
  {
    icon: Fish,
    title: 'Sustainable Sourcing',
    description: 'All our seafood is responsibly sourced from certified sustainable fisheries.'
  },
  {
    icon: Snowflake,
    title: 'Advanced Freezing',
    description: 'State-of-the-art freezing technology preserves freshness and nutritional value.'
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'Meets international quality and safety standards for global export.'
  },
  {
    icon: Waves,
    title: 'Ocean Fresh',
    description: 'Delivered with the natural taste and texture of fresh ocean catch.'
  }
];

export const SeafoodPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-teal-700">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl font-bold mb-4">Premium Seafood</h1>
            <p className="text-xl font-light">Sustainably sourced fish and prawns for global markets</p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Seafood?</h2>
            <p className="text-xl text-gray-600">Premium quality and sustainable practices</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Seafood Products</h2>
            <p className="text-xl text-gray-600">Fresh and frozen options for all your needs</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <product.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Processing Standards</h5>
                    <p className="text-sm text-gray-600">
                      HACCP certified facilities • Temperature controlled • Hygienic packaging
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Promise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Sustainability Promise</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                We are committed to sustainable fishing practices that protect marine ecosystems 
                while delivering the finest quality seafood to our customers worldwide.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-teal-200">Sustainable Sourcing</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">25+</div>
                  <div className="text-teal-200">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-teal-200">Countries Served</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};