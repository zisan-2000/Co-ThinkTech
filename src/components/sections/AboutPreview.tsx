import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const AboutPreview = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '15+', label: 'Team Members' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower businesses with innovative technology solutions that drive growth and efficiency.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the leading technology partner for businesses seeking digital transformation.'
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Innovation, integrity, collaboration, and excellence in everything we do.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About CoThinkTech"
          subtitle="We're a team of passionate technologists dedicated to solving complex business challenges through innovative solutions."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-800 mb-6">
              Transforming Ideas into Digital Reality
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-600 mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between business needs and technological possibilities, 
              CoThinkTech has been at the forefront of digital innovation. We combine deep technical expertise 
              with strategic thinking to deliver solutions that not only meet today's requirements but also 
              prepare businesses for tomorrow's challenges.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-600 mb-8 leading-relaxed">
              Our collaborative approach ensures that every project is a partnership, where your business 
              goals become our technical objectives. We don't just build software; we craft experiences 
              that drive results.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 group"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-100 dark:to-purple-100 rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-700 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-100 dark:to-slate-200 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-800 mb-4">
                {value.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;