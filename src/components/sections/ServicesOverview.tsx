import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  BarChart3,
  ArrowRight 
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import WaveDivider from '../ui/WaveDivider';

const ServicesOverview = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices for optimal performance.',
      features: ['React/Next.js', 'Node.js', 'TypeScript', 'Responsive Design']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['React Native', 'iOS/Android', 'UI/UX Design', 'App Store Optimization']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['AWS/Azure', 'DevOps', 'Microservices', 'Auto-scaling']
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Robust data pipelines and analytics solutions to unlock business insights.',
      features: ['ETL Pipelines', 'Data Warehousing', 'Real-time Analytics', 'ML Integration']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Monitoring']
    },
    {
      icon: BarChart3,
      title: 'Digital Strategy',
      description: 'Strategic consulting to align technology initiatives with business objectives.',
      features: ['Technology Roadmap', 'Digital Transformation', 'Process Optimization', 'ROI Analysis']
    }
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-slate-50 dark:bg-slate-900">
      <WaveDivider 
        className="absolute top-0 left-0 right-0" 
        color="fill-slate-50 dark:fill-slate-900" 
        flip={true} 
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive technology solutions tailored to your business needs, from concept to deployment and beyond."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 group shadow-lg hover:shadow-xl"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;