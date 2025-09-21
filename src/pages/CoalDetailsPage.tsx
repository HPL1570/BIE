import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Flame, Zap, Shield, Award, Truck, Globe } from 'lucide-react';

const coalData = {
  'australian-coal': {
    title: 'Australian Coal',
    description: 'Premium quality coal from Australia with exceptional combustion properties and low ash content.',
    image: 'https://imgs.search.brave.com/23Tm8yDpVaTq314eh5zFQXq9cqPSuoA1crS_1RwmxQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MzIxMzE2L3Bob3Rv/L2NvYWwtd2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/dHJmbEd0TmZpTE5x/UHpDQlZCT3pFX1RW/RExQRThJTEdrdHZ0/ZDRiZFpjPQ',
    specifications: {
      shape: 'Lump',
      fixedCarbon: '42-45%',
      ashContent: '6-7%',
      purity: '99%',
      feature: 'High Combustion Rating, High Reliability'
    },
    features: [
      { icon: Flame, title: 'Superior Combustion', description: 'Excellent burning characteristics with high heat output' },
      { icon: Shield, title: 'Low Ash Content', description: 'Minimal residue for cleaner operations' },
      { icon: Zap, title: 'High Energy', description: 'Optimal calorific value for maximum efficiency' },
      { icon: Award, title: 'Export Grade', description: 'Meets international quality standards' }
    ]
  },
  'indonesian-coal': {
    title: 'Indonesian Coal',
    description: 'High-grade Indonesian coal known for its reliability and excellent burning characteristics.',
    image: 'https://imgs.search.brave.com/23Tm8yDpVaTq314eh5zFQXq9cqPSuoA1crS_1RwmxQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MzIxMzE2L3Bob3Rv/L2NvYWwtd2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/dHJmbEd0TmZpTE5x/UHpDQlZCT3pFX1RW/RExQRThJTEdrdHZ0/ZDRiZFpjPQ',
    specifications: {
      shape: 'Lump',
      fixedCarbon: '40-44%',
      ashContent: '7-8%',
      purity: '98%',
      feature: 'High Combustion Rating, High Reliability'
    },
    features: [
      { icon: Flame, title: 'Consistent Quality', description: 'Reliable performance across all applications' },
      { icon: Truck, title: 'Bulk Supply', description: 'Large volume capabilities for industrial needs' },
      { icon: Zap, title: 'Cost Effective', description: 'Competitive pricing without compromising quality' },
      { icon: Award, title: 'Proven Reliability', description: 'Trusted by industries worldwide' }
    ]
  },
  'south-african-coal': {
    title: 'South African Coal',
    description: 'Top-quality South African coal with superior energy output and minimal environmental impact.',
    image: 'https://imgs.search.brave.com/23Tm8yDpVaTq314eh5zFQXq9cqPSuoA1crS_1RwmxQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MzIxMzE2L3Bob3Rv/L2NvYWwtd2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/dHJmbEd0TmZpTE5x/UHpDQlZCT3pFX1RW/RExQRThJTEdrdHZ0/ZDRiZFpjPQ',
    specifications: {
      shape: 'Lump',
      fixedCarbon: '45-48%',
      ashContent: '5-6%',
      purity: '99.5%',
      feature: 'High Combustion Rating, High Reliability'
    },
    features: [
      { icon: Flame, title: 'Superior Energy', description: 'Highest calorific value in our range' },
      { icon: Shield, title: 'Low Sulfur', description: 'Environmentally friendly with reduced emissions' },
      { icon: Globe, title: 'Clean Burning', description: 'Minimal environmental impact during combustion' },
      { icon: Award, title: 'Premium Grade', description: 'Top-tier quality for demanding applications' }
    ]
  },
  'steam-coal': {
    title: 'Steam Coal',
    description: 'Industrial-grade steam coal perfect for power generation and industrial heating applications.',
    image: 'https://imgs.search.brave.com/23Tm8yDpVaTq314eh5zFQXq9cqPSuoA1crS_1RwmxQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MzIxMzE2L3Bob3Rv/L2NvYWwtd2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/dHJmbEd0TmZpTE5x/UHpDQlZCT3pFX1RW/RExQRThJTEdrdHZ0/ZDRiZFpjPQ',
    specifications: {
      shape: 'Lump',
      fixedCarbon: '38-42%',
      ashContent: '8-10%',
      purity: '97%',
      feature: 'High Combustion Rating, High Reliability'
    },
    features: [
      { icon: Zap, title: 'Power Generation', description: 'Optimized for electricity generation plants' },
      { icon: Flame, title: 'Industrial Use', description: 'Perfect for manufacturing and industrial heating' },
      { icon: Truck, title: 'Consistent Supply', description: 'Reliable delivery schedules for continuous operations' },
      { icon: Award, title: 'High Efficiency', description: 'Maximum energy output for industrial needs' }
    ]
  }
};

export const CoalDetailsPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const coal = type ? coalData[type as keyof typeof coalData] : null;

  if (!coal) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Coal Type Not Found</h1>
          <Link to="/products/coal" className="text-blue-800 hover:text-blue-600">
            Return to Coal Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Back Navigation */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/products/coal"
            className="inline-flex items-center text-blue-800 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Coal Products
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{coal.title}</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {coal.description}
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Product Specifications</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Shape:</span>
                    <p className="text-gray-600">{coal.specifications.shape}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Fixed Carbon:</span>
                    <p className="text-gray-600">{coal.specifications.fixedCarbon}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Ash Content:</span>
                    <p className="text-gray-600">{coal.specifications.ashContent}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Purity:</span>
                    <p className="text-gray-600">{coal.specifications.purity}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="font-semibold text-gray-700">Features:</span>
                    <p className="text-gray-600">{coal.specifications.feature}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={coal.image}
                alt={coal.title}
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features & Benefits</h2>
            <p className="text-xl text-gray-600">What makes our {coal.title.toLowerCase()} exceptional</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coal.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 lg:p-12 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Perfect for Industrial Applications</h2>
              <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
                Our {coal.title.toLowerCase()} is ideal for various industrial and commercial applications, 
                delivering consistent performance and reliability for your operations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                    <Zap className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Power Generation</h3>
                  <p className="text-gray-300">Electricity production and power plants</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                    <Flame className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Industrial Heating</h3>
                  <p className="text-gray-300">Manufacturing and industrial processes</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                    <Award className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Commercial Use</h3>
                  <p className="text-gray-300">Commercial heating and energy needs</p>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12"
              >
                <Link
                  to="/contact"
                  className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors"
                >
                  Request Quote
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};