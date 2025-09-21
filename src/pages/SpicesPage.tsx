import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Award, Globe, Leaf } from 'lucide-react';

const features = [
  {
    icon: Flame,
    title: 'Rich Flavor',
    description: 'Intense pungency and authentic taste that enhances any culinary creation.'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Carefully selected and processed to maintain the highest quality standards.'
  },
  {
    icon: Globe,
    title: 'Global Favorite',
    description: 'Trusted by international markets for consistent quality and flavor.'
  },
  {
    icon: Leaf,
    title: 'Farm Fresh',
    description: 'Sourced directly from trusted farms ensuring freshness and authenticity.'
  }
];

export const SpicesPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative h-96 bg-gradient-to-r from-red-900 to-orange-700">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl font-bold mb-4">Premium Spices</h1>
            <p className="text-xl font-light">High-quality red chillis for global markets</p>
          </motion.div>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://organicshandy.com/wp-content/uploads/2018/10/Red-Chilly.jpg"
                alt="Red Chillis"
                className="w-full rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Red Chillis</h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="mb-4">
                  We specialize in exporting high-quality red chillis sourced from trusted farms. 
                  Known for their rich flavor, vibrant color, and unmatched pungency, our chillis 
                  are a favorite across global markets.
                </p>
                <p className="mb-4">
                  Our red chillis undergo rigorous quality control processes to ensure they meet 
                  international standards. From carefully selected farms to professional processing 
                  and packaging, we maintain excellence at every step.
                </p>
                <p>
                  Perfect for culinary applications, food processing, and spice manufacturing, 
                  our red chillis deliver consistent quality and authentic taste that chefs and 
                  food manufacturers trust worldwide.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-800 mb-4">Product Specifications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Origin:</strong> Premium farms in India</li>
                  <li><strong>Variety:</strong> High-quality red chillis</li>
                  <li><strong>Color:</strong> Vibrant red</li>
                  <li><strong>Pungency:</strong> High intensity</li>
                  <li><strong>Moisture:</strong> &lt; 10%</li>
                  <li><strong>Packaging:</strong> Export-grade packaging</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Red Chillis?</h2>
            <p className="text-xl text-gray-600">Premium quality that meets international standards</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Quality Guarantee</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Every batch of our red chillis undergoes comprehensive quality testing to ensure 
                they meet the highest international standards for color, flavor, pungency, and safety.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">99%</div>
                  <div className="text-red-200">Purity Level</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">30+</div>
                  <div className="text-red-200">Countries Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-red-200">Customer Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};