import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import AboutPreview from '../components/sections/AboutPreview';
import ServicesOverview from '../components/sections/ServicesOverview';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <Testimonials />
      <CTASection />
    </motion.div>
  );
};

export default Home;