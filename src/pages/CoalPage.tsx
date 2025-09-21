import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, Zap, Shield, Award } from 'lucide-react';

const coalTypes = [
  {
    id: 'australian-coal',
    title: 'Australian Coal',
    description: 'Premium quality coal from Australia with exceptional combustion properties and low ash content.',
    image: 'https://imgs.search.brave.com/23Tm8yDpVaTq314eh5zFQXq9cqPSuoA1crS_1RwmxQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MzIxMzE2L3Bob3Rv/L2NvYWwtd2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/dHJmbEd0TmZpTE5x/UHpDQlZCT3pFX1RW/RExQRThJTEdrdHZ0/ZDRiZFpjPQ',
    features: ['Low Ash Content', 'High Calorific Value', 'Consistent Quality', 'Export Grade']
  },
  {
    id: 'indonesian-coal',
    title: 'Indonesian Coal',
    description: 'High-grade Indonesian coal known for its reliability and excellent burning characteristics.',
    image: 'https://imgs.search.brave.com/23Tm8yDpVaTq314eh5zFQXq9cqPSuoA1crS_1RwmxQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MzIxMzE2L3Bob3Rv/L2NvYWwtd2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/dHJmbEd0TmZpTE5x/UHpDQlZCT3pFX1RW/RExQRThJTEdrdHZ0/ZDRiZFpjPQ',
    features: ['High Reliability', 'Good Combustion', 'Cost Effective', 'Bulk Supply']
  },
  {
    id: 'south-african-coal',
    title: 'South African Coal',
    description: 'Top-quality South African coal with superior energy output and minimal environmental impact.',
    image: 'https://imgs.search.brave.com/23Tm8yDpVaTq314eh5zFQXq9cqPSuoA1crS_1RwmxQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MzIxMzE2L3Bob3Rv/L2NvYWwtd2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/dHJmbEd0TmZpTE5x/UHpDQlZCT3pFX1RW/RExQRThJTEdrdHZ0/ZDRiZFpjPQ',
    features: ['Superior Energy', 'Low Sulfur', 'Clean Burning', 'Environmental Friendly']
  },
  {
    id: 'steam-coal',
    title: 'Steam Coal',
    description: 'Industrial-grade steam coal perfect for power generation and industrial heating applications.',
    image: 'https://imgs.search.brave.com/23Tm8yDpVaTq314eh5zFQXq9cqPSuoA1crS_1RwmxQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MzIxMzE2L3Bob3Rv/L2NvYWwtd2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/dHJmbEd0TmZpTE5x/UHpDQlZCT3pFX1RW/RExQRThJTEdrdHZ0/ZDRiZFpjPQ',
    features: ['Power Generation', 'Industrial Use', 'High Efficiency', 'Consistent Supply']
  }
];

const benefits = [
  {
    icon: Flame,
    title: 'High Combustion Rating',
    description: 'Our coal products deliver exceptional burning efficiency for maximum energy output.'
  },
  {
    icon: Zap,
    title: 'Superior Energy Content',
    description: 'High calorific value ensures optimal performance in all industrial applications.'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control measures ensure consistent product standards.'
  },
  {
    icon: Award,
    title: 'Export Quality',
    description: 'Meeting international standards for export to global markets.'
  }
];

export const CoalPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl font-bold mb-4">Our Coal Products</h1>
            <p className="text-xl font-light">Premium quality coal for industrial and energy applications</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Coal?</h2>
            <p className="text-xl text-gray-600">Superior quality and reliability for all your energy needs</p>
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coal Types Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Coal Products</h2>
            <p className="text-xl text-gray-600">Explore our range of premium coal products</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coalTypes.map((coal, index) => (
              <motion.div
                key={coal.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={`/products/coal/${coal.id}`}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={coal.image}
                        alt={coal.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors">
                        {coal.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {coal.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                          {coal.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center text-blue-800 font-semibold group-hover:text-blue-600 transition-colors">
                        <span>View Details</span>
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};