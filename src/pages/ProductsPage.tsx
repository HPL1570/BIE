import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Coal',
    description: 'Premium quality coal sourced from Australia, Indonesia, and South Africa. High combustion rating and reliability for industrial and energy applications.',
    image: 'https://imgs.search.brave.com/z3RuDi3HWJ2K9VNRYQdGw-UrMumfetQ17DGihDxPjhQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEzLzc1LzIxLzQ2/LzM2MF9GXzEzNzUy/MTQ2MThfWlJ3VzRx/RWRjYW9pRVBabDY2/Rk1jejh0VlNXblpz/blAuanBn',
    link: '/products/coal',
    features: ['Australian Coal', 'Indonesian Coal', 'South African Coal', 'Steam Coal']
  },
  {
    id: 2,
    title: 'Spices',
    description: 'High-quality red chillis sourced from trusted farms. Known for rich flavor, vibrant color, and unmatched pungency.',
    image: 'https://organicshandy.com/wp-content/uploads/2018/10/Red-Chilly.jpg?auto=compress&cs=tinysrgb&w=800',
    link: '/products/spices',
    features: ['Red Chillis', 'Rich Flavor', 'Vibrant Color', 'Export Quality']
  },
  {
    id: 3,
    title: 'Seafood',
    description: 'Fresh and frozen seafood including premium fish and prawns, sustainably sourced and carefully processed for international markets.',
    image: 'https://thumbs.dreamstime.com/b/seafood-ice-23267947.jpg?auto=compress&cs=tinysrgb&w=800',
    link: '/products/seafood',
    features: ['Fresh Fish', 'Premium Prawns', 'Sustainably Sourced', 'Frozen Options']
  }
];

export const ProductsPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl font-light">Premium quality products for global markets</p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={product.link}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors">
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
                              <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center text-blue-800 font-semibold group-hover:text-blue-600 transition-colors">
                        <span>Explore {product.title}</span>
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