import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Coal',
    description: 'Premium quality coal sourced from Australia, Indonesia, and South Africa for industrial and energy applications.',
    image: 'https://imgs.search.brave.com/23Tm8yDpVaTq314eh5zFQXq9cqPSuoA1crS_1RwmxQU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MzIxMzE2L3Bob3Rv/L2NvYWwtd2V0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/dHJmbEd0TmZpTE5x/UHpDQlZCT3pFX1RW/RExQRThJTEdrdHZ0/ZDRiZFpjPQ',
    link: '/products/coal'
  },
  {
    id: 2,
    title: 'Spices',
    description: 'High-quality red chillis and aromatic spices sourced from trusted farms, known for rich flavor and vibrant color.',
    image: 'https://organicshandy.com/wp-content/uploads/2018/10/Red-Chilly.jpg',
    link: '/products/spices'
  },
  {
    id: 3,
    title: 'Seafood',
    description: 'Fresh and frozen seafood including premium fish and prawns, sustainably sourced and carefully processed.',
    image: 'https://thumbs.dreamstime.com/b/seafood-ice-23267947.jpg',
    link: '/products/seafood'
  }
];

export const ProductCards: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium range of products, carefully sourced and processed to meet the highest international standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center text-blue-800 font-semibold group-hover:text-blue-600 transition-colors">
                      <span>Learn More</span>
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
  );
};