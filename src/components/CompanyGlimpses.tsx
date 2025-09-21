import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Globe, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    title: 'Established',
    value: '1993',
    description: 'Over 30 years of excellence'
  },
  {
    icon: Users,
    title: 'Employees',
    value: '200+',
    description: 'Dedicated professionals'
  },
  {
    icon: Globe,
    title: 'Market Coverage',
    value: 'Global',
    description: 'Worldwide presence'
  },
  {
    icon: TrendingUp,
    title: 'Business',
    value: 'Multi-faceted',
    description: 'Exporters, Wholesaler, Trader, Importer'
  }
];

export const CompanyGlimpses: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Company at a Glance</h2>
          <p className="text-xl text-blue-200">
            Trusted by businesses worldwide for three decades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, rotateY: 180 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-black" />
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-blue-200">
                  {stat.title}
                </h3>
                
                <div className="text-3xl font-bold mb-2">
                  {stat.value}
                </div>
                
                <p className="text-blue-300 text-sm">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};