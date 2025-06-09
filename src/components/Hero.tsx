import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Users, 
  Lightbulb, 
  ArrowRight, 
  Play,
  Sparkles
} from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo/Brand Section */}
        <motion.div
          variants={itemVariants}
          className="mb-8 sm:mb-12"
        >
          <motion.div
            className="flex items-center space-x-3 mb-6"
            variants={floatingVariants}
            animate="animate"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur-lg opacity-50"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              CoThinkTech
            </span>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-6 sm:mb-8 leading-tight"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
            Think Beyond
          </span>
          <br />
          <span className="text-white">Technology</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-slate-300 text-center max-w-4xl mb-10 sm:mb-12 leading-relaxed px-4"
        >
          We solve business problems with cutting-edge technology and collaborative innovation,
          <br className="hidden sm:block" />
          transforming ideas into future-ready solutions.
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {[
            { icon: Lightbulb, text: "Innovation" },
            { icon: Users, text: "Collaboration" },
            { icon: Sparkles, text: "Excellence" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/10 transition-all duration-300">
                <item.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <span className="text-white font-medium text-sm sm:text-base">{item.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-semibold text-white text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </motion.button>

          <motion.button
            className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-semibold text-white text-lg hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Learn More</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Wave Divider */}
      <motion.div
        className="absolute bottom-0 left-0 w-full overflow-hidden"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <svg
          className="relative block w-full h-24 sm:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
            className="fill-slate-50"
          ></path>
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;